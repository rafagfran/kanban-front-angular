import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { IconRocket } from '../../svg/icons/rocket.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, IconRocket],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
