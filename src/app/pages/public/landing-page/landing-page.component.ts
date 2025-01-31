import { Component } from "@angular/core";
import { HeaderComponent } from "../../../components/header/header.component";
import { HeroComponent } from "../../../components/hero/hero.component";

@Component({
	selector: "app-landing-page",
	imports: [HeaderComponent, HeroComponent],
	templateUrl: "./landing-page.component.html",
	styleUrl: "./landing-page.component.css",
})
export class LandingPageComponent {}
