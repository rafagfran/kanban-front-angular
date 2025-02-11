import {
  CdkDrag,
  type CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { type ColumnType, MOCK_DATA } from '../../../data/MOCK_DATA';
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
  ],
  templateUrl: './board.component.html',
})
export class BoardComponent {
  columns: ColumnType[] = MOCK_DATA;

  drop(event: CdkDragDrop<ColumnType[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
