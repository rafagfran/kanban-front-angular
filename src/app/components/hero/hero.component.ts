import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "../../shared/button/button.component";
import { IconArrowRight } from "../../svg/icons/arrowRight.component";

@Component({
	selector: "app-hero",
	imports: [ButtonComponent, IconArrowRight, RouterLink],
	templateUrl: "./hero.component.html",
})
export class HeroComponent {}
