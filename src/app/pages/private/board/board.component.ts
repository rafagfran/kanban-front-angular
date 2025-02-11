import {
  CdkDrag,
  type CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { type ColumnType, MOCK_DATA } from '../../../data/MOCK_DATA';
import { IconPlus } from '../../../svg/icons/plus.component';
import { BoardColumnComponent } from './components/board-column/board-column.component';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
@Component({
  selector: 'app-board-layout',
  imports: [
    CdkDropList,
    CdkDrag,
    BoardColumnComponent,
    BoardHeaderComponent,
    CdkDragPlaceholder,

    IconPlus,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './board.component.html',
})
export class BoardComponent {
  columns: ColumnType[] = MOCK_DATA;
  showInput = signal(false);
  newListTitle = '';

  enableInput() {
    this.showInput.set(true);
  }

  addNewList() {
    if (this.newListTitle.trim()) {
      this.columns.push({
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
}
