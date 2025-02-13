import {
  Component,
  type ElementRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  type InputVariantTypes,
  InputVariants,
} from '../../utils/InputVariants';

@Component({
  selector: 'input-component',
  imports: [FormsModule],
  template: `
    <input
      #inputRef
      [(ngModel)]="inputValue"
      [class]="classes"
      [type]="inputType"
      [placeholder]="placeholder"
    />
  `,
})
export class InputComponent {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;

  @Output() inputValue = '';
  @Input() class = '';
  @Input() variant: InputVariantTypes['variant'];
  @Input() placeholder = '';
  @Input() inputType: 'text' | 'password' | 'email' = 'text';

  get classes() {
    return InputVariants({
      variant: this.variant,
      class: this.class,
    });
  }

  setFocus() {
    this.inputElement?.nativeElement.focus();
  }
}
