import { Component, Input } from '@angular/core';
import {
  type ButtonVariantTypes,
  ButtonVariants,
} from '../../utils/ButtonVariants';

@Component({
  selector: 'button-component',
  template: ` <ng-content></ng-content> `,
  host: {
    role: 'button',
    '[class]': 'classes',
    '(click)': 'handleClick()',
  },
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() content!: string;
  @Input() class = '';
  @Input() variant: ButtonVariantTypes['variant'];
  @Input() size: ButtonVariantTypes['size'];
  @Input() onClick: () => void = () => {};

  get classes(): string {
    return ButtonVariants({
      variant: this.variant,
      size: this.size,
      class: this.class,
    });
  }

  handleClick = () => this.onClick();
}
