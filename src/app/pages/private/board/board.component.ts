import {
	CdkDrag,
	type CdkDragDrop,
	CdkDropList,
	moveItemInArray,
	transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";
import { IconMenu } from "../../../svg/icons/menu.component";

@Component({
	selector: "app-board-layout",
	imports: [CdkDropList, CdkDrag, IconMenu],
	templateUrl: "./board.component.html",
	styleUrls: ["./board.component.css"],
})
export class BoardComponent {
	todo = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

	done = ["Get up", "Brush teeth", "Take a shower", "Check e-mail", "Walk dog"];

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
