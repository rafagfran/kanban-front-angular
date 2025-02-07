import {
	CdkDrag,
	type CdkDragDrop,
	CdkDragPlaceholder,
	CdkDropList,
	moveItemInArray,

} from "@angular/cdk/drag-drop";
import { Component, Input, booleanAttribute } from "@angular/core";
import { BoardColumnComponent } from "./components/board-column/board-column.component";
import { BoardHeaderComponent } from "./components/board-header/board-header.component";
@Component({
	selector: "app-board-layout",
	imports: [
		CdkDropList,
		CdkDrag,
		BoardColumnComponent,
		BoardHeaderComponent,
		CdkDragPlaceholder,
	],
	templateUrl: "./board.component.html",
})
export class BoardComponent {

	columns = [
		"To do",
		"Progress",
		"Done",
		"Backlog",
		"In Review",
		"Blocked",
		"In Testing",
		"Ready for Deployment",
		"Deployed",
		"Archived",
	];

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
	}

  
}
