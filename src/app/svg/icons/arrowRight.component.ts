import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-arrowRight',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width"
      [attr.height]="height"
      [attr.fill]="color"
      viewBox="0 0 256 256"
    >
      <path
        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
      ></path>
    </svg>
  `,
})
export class IconArrowRight {
  @Input() width = '24';
  @Input() height = '24';
  @Input() color = 'var(--color-foreground)';
}
