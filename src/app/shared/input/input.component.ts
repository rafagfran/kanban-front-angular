import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  type InputVariantTypes,
  InputVariants,
} from '../../utils/InputVariants';

@Component({
  selector: 'input-component',
  imports: [FormsModule],
  template: ` <input
    [id]="inputId"
    [(ngModel)]="inputValue"
    class="mb-2 w-full rounded-md bg-card-background p-2 text-start text-sm font-light placeholder:text-foreground focus:outline-1 focus:outline-primary"
    [type]="inputType"
    [placeholder]="placeholder"
  />`,
})
export class InputComponent {
  @Input() inputId = '';
  @Input() class = '';
  @Input() variant: InputVariantTypes['variant'];
  @Output() inputValue = '';
  @Input() placeholder = '';
  @Input() inputType: 'text' | 'password' | 'email' = 'text';

  get casses() {
    return InputVariants({
      variant: this.variant,
      class: this.class,
    });
  }
}
