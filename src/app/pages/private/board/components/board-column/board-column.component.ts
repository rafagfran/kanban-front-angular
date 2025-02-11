import {
  CdkDrag,
  type CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

// biome-ignore lint/style/useImportType: <explanation>
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  type ElementRef,
  HostListener,
  Input,
  ViewChild,
  signal,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  type ColumnType,
  MOCK_DATA,
  type TaskType,
} from '../../../../../data/MOCK_DATA';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { IconDotsThree } from '../../../../../svg/icons/dots.component';
import { IconPlus } from '../../../../../svg/icons/plus.component';
import { CardTaskComponent } from '../card-task/card-task.component';

@Component({
  selector: 'app-board-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IconDotsThree,
    CardTaskComponent,
    ButtonComponent,
    IconPlus,
    CdkDropListGroup,
    CdkDragPlaceholder,
    CdkDropList,
    CdkDrag,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './board-column.component.html',
})

// TODO: Entender como evitar a renderização desnecessária das colunas
export class BoardColumnComponent {
  @ViewChild('newTaskInput') newTaskInput!: ElementRef<HTMLInputElement>;
  @ViewChild('newTaskContainer') newTaskContainer!: ElementRef<HTMLDivElement>;
  @Input() columnData!: ColumnType;
  newTaskTitle = '';
  showInput = signal(false);
  private shouldFocus = false;

  //TODO: Entender o que é o ChangeDetectorRef
  constructor(private cdRef: ChangeDetectorRef) {}

  enableInput() {
    this.showInput.set(true);
    this.shouldFocus = true;
  }

  ngAfterViewChecked(): void {
    if (this.shouldFocus && this.newTaskInput) {
      this.newTaskInput.nativeElement.focus();
      this.shouldFocus = false;
      //TODO: Entender o que faz o detectChanges
      this.cdRef.detectChanges();
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.showInput() &&
      this.newTaskInput &&
      !this.newTaskContainer.nativeElement.contains(event.target as Node)
    ) {
      this.showInput.set(false);
      this.newTaskTitle = '';
    }
  }

  addNewTask = ({ columnTitle }: { columnTitle: string }) => {
    if (this.newTaskTitle.trim()) {
      const newTask: TaskType = {
        id: Date.now().toString(),
        title: this.newTaskTitle,
        description: '',
      };
      MOCK_DATA.find((column) => column.title === columnTitle)?.tasks.push(
        newTask,
      );
      this.newTaskTitle = '';
      this.showInput.set(false);
    } else {
      this.newTaskInput.nativeElement.focus();
    }
  };

  drop(event: CdkDragDrop<TaskType[]>) {
    if (!this.columnData) {
      console.error('data is not defined');
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
