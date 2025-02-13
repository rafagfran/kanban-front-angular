import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  type ButtonVariantTypes,
  ButtonVariants,
} from '../../utils/ButtonVariants';

@Component({
  selector: 'button-component',
  template: ` <button
    [type]="type"
    [class]="classes"
    (click)="handleClick($event)"
  >
    <ng-content></ng-content>
  </button>`,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() class = '';
  @Input() variant: ButtonVariantTypes['variant'];
  @Input() size: ButtonVariantTypes['size'];
  @Output() onClick = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.onClick.emit(event);
  }

  get classes(): string {
    return ButtonVariants({
      variant: this.variant,
      size: this.size,
      class: this.class,
    });
  }
}
