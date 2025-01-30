import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	imports: [HeaderComponent, HeroComponent],
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "valinor-kanban";
}
