import {
	CdkDrag,
	type CdkDragDrop,
	CdkDragPlaceholder,
	CdkDropList,
	CdkDropListGroup,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
	],
	templateUrl: './board-column.component.html',
})
export class BoardColumnComponent {
	@Input() columnData!: ColumnType;
	newTaskTitle = new FormControl('');
	showInput = signal(false);

	// Pensar na construçao desta funcao, em sua utilizaçao nos botoes de adicionar e cancelar
	toggleInput = () => {
		this.showInput.update((prev) => !prev);
	};

	addNewTask = ({ columnTitle }: { columnTitle: string }) => {
		if (this.newTaskTitle.value) {
			const newTask: TaskType = {
				id: Date.now().toString(),
				title: this.newTaskTitle.value,
				description: '',
			};
			MOCK_DATA.find((column) => column.title === columnTitle)?.tasks.push(
				newTask,
			);
			this.newTaskTitle.setValue('');
			this.showInput.set(false);
		} else {
			this.showInput.set(false);
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
