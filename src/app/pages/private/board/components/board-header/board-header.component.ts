import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { IconMoon } from '../../../../../svg/icons/moon.component';
import { IconSun } from '../../../../../svg/icons/sun.component';

@Component({
  selector: 'app-board-header',
  imports: [IconMoon, IconSun, ButtonComponent],
  templateUrl: './board-header.component.html',
})
export class BoardHeaderComponent {
  theme = signal<'light' | 'dark'>('light');

  actualDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  switchTheme() {
    this.theme.update((prev) => {
      if (prev === 'light') {
        return 'dark';
      }
      return 'light';
    });
  }
}
