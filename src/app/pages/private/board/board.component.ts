import {
	CdkDrag,
	type CdkDragDrop,
	CdkDropList,
	moveItemInArray,
} from "@angular/cdk/drag-drop";
import { Component, Output } from "@angular/core";
import { BoardColumnComponent } from "./components/board-column/board-column.component";
import { BoardHeaderComponent } from "./components/board-header/board-header.component";
@Component({
	selector: "app-board-layout",
	imports: [CdkDropList, CdkDrag, BoardColumnComponent, BoardHeaderComponent],
	templateUrl: "./board.component.html",
})
export class BoardComponent {
	@Output() columns = ["To do", "Progress", "Done","To do", "Progress", "Done"];

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
	}
}
