import {
  CdkDrag,
  type CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  type ColumnType,
  MOCK_DATA,
  type TaskType,
} from '../../../data/MOCK_DATA';
import { ButtonComponent } from '../../../shared/button/button.component';
import { InputComponent } from '../../../shared/input/input.component';
import { IconPlus } from '../../../svg/icons/plus.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { CardTaskComponent } from './components/card-task/card-task.component';

@Component({
  selector: 'app-board-layout',
  templateUrl: './board.component.html',
  imports: [
    CdkDropList,
    CdkDrag,
    BoardColumnComponent,
    BoardHeaderComponent,
    CdkDragPlaceholder,
    IconPlus,
    FormsModule,
    ReactiveFormsModule,
    CardTaskComponent,
    CdkDropListGroup,
    ButtonComponent,
    InputComponent,
  ],
})
export class BoardComponent {
  columns: ColumnType[] = MOCK_DATA;
  showInput = signal(false);
  newListTitle = '';

  enableInput = () => {
    this.showInput.set(true);
  };

  addNewList() {
    if (this.newListTitle.trim()) {
      this.columns.push({
        id: Date.now().toString(),
        title: this.newListTitle,
        tasks: [],
      });
      this.showInput.set(false);
      this.newListTitle = '';
    }
  }

  drop(event: CdkDragDrop<ColumnType[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  dropCard(event: CdkDragDrop<TaskType[]>) {
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
