import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type ButtonVariants, button } from '../../utils/ButtonVariants';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
})
export class ButtonComponent {
	@Input() class = '';
	@Input() variant: ButtonVariants['variant'];
	@Input() size: ButtonVariants['size'];
	@Output() onClick = new EventEmitter<Event>();

	//ENTENDER ESTA PARTE DE RECEBER O EVENTO
	handleClick(event: Event) {
		this.onClick.emit(event);
	}

	get classes(): string {
		return button({
			variant: this.variant,
			size: this.size,
			class: this.class,
		});
	}
}
