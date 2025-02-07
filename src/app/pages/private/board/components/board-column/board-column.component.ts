import {
	CdkDrag,
	type CdkDragDrop,
	CdkDragPlaceholder,
	CdkDropList,
	CdkDropListGroup,
	moveItemInArray,
	transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, Input } from "@angular/core";
import { MOCK_DATA, type task } from "../../../../../data/MOCK_DATA";
import { ButtonComponent } from "../../../../../shared/button/button.component";
import { IconDotsThree } from "../../../../../svg/icons/dots.component";
import { IconPlus } from "../../../../../svg/icons/plus.component";
import { CardTaskComponent } from "../card-task/card-task.component";

@Component({
	selector: "app-board-column",
	imports: [
		IconDotsThree,
		CardTaskComponent,
		ButtonComponent,
		IconPlus,
		CdkDropListGroup,
		CdkDragPlaceholder,
		CdkDropList,
		CdkDrag,
	],
	templateUrl: "./board-column.component.html",
})
export class BoardColumnComponent {
	data: task[] = MOCK_DATA;
	@Input({ required: true }) title = "";

	drop(event: CdkDragDrop<string[]>) {
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
