import {
  CdkDrag,
  type CdkDragDrop,
  CdkDragPlaceholder,
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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  type ColumnType,
  MOCK_DATA,
  type TaskType,
} from '../../../../../data/MOCK_DATA';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { InputComponent } from '../../../../../shared/input/input.component';
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
    CdkDragPlaceholder,
    CdkDrag,
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
  ],
  templateUrl: './board-column.component.html',
})

// TODO: Entender como evitar a renderização desnecessária das colunas
export class BoardColumnComponent {
  @ViewChild(InputComponent) inputNewTask!: InputComponent;
  @ViewChild('newTaskContainer') newTaskContainer!: ElementRef<HTMLDivElement>;
  @Input() columnData!: ColumnType;

  newTaskTitle = new FormControl('');
  showInput = signal(false);

  //TODO: Entender o que é o ChangeDetectorRef
  constructor(private cdRef: ChangeDetectorRef) {}

  handleInputValueChange = (value: string) => {
    console.log(value);
  };

  disableInput = () => {
    this.showInput.set(false);
    this.newTaskTitle.setValue('');
  };

  enableInput = () => {
    this.showInput.set(true);
  };

  addNewTaskToColumn = ({ columnId }: { columnId: string }) => {
    if (this.newTaskTitle.value) {
      const newTask: TaskType = {
        id: Date.now().toString(),
        title: this.newTaskTitle.value,
        description: '',
      };
      MOCK_DATA.find((column) => column.id === columnId)?.tasks.push(newTask);
      this.newTaskTitle.setValue('');
      this.showInput.set(false);
    } else {
      this.inputNewTask.setFocus();
    }
  };

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.showInput() &&
      this.inputNewTask &&
      !this.newTaskContainer.nativeElement.contains(event.target as Node)
    ) {
      this.showInput.set(false);
      this.newTaskTitle.setValue('');
    }
  }
  drop(event: CdkDragDrop<TaskType[]>) {
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
