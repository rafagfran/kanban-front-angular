import {
  Component,
  type ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  type InputVariantTypes,
  InputVariants,
} from '../../utils/InputVariants';

@Component({
  selector: 'input-component',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <input
      #inputRef
      [class]="classes"
      [type]="inputType"
      [placeholder]="placeholder"
      [formControl]="control"
      (input)="onInputChange()"
    />
  `,
})
export class InputComponent {
  @ViewChild('inputRef') inputElement!: ElementRef<HTMLInputElement>;
  @Input() focusOnInit = false;
  @Input() class = '';
  @Input() variant: InputVariantTypes['variant'];
  @Input() placeholder = '';
  @Input() inputType: 'text' | 'password' | 'email' = 'text';

  @Input() control = new FormControl('');
  @Output() inputValueChange = new EventEmitter<string>();

  onInputChange() {
    this.inputValueChange.emit(this.control.value ?? '');
  }

  get classes() {
    return InputVariants({
      variant: this.variant,
      class: this.class,
    });
  }

  setFocus() {
    this.inputElement?.nativeElement.focus();
  }

  ngAfterViewInit() {
    if (this.focusOnInit) {
      this.setFocus();
    }
  }
}
