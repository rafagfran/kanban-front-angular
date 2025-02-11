import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../shared/button/button.component';
import { IconArrowRight } from '../../../svg/icons/arrowRight.component';
import { IconMenu } from '../../../svg/icons/menu.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    ButtonComponent,
    IconMenu,
    ButtonComponent,
    IconArrowRight,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {}
