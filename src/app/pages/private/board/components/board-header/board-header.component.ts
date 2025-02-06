import { Component } from "@angular/core";
import { IconMoon } from "../../../../../svg/icons/moon.component";
import { IconSun } from "../../../../../svg/icons/sun.component";
import { ButtonComponent } from "../../../../../shared/button/button.component";

@Component({
	selector: "app-board-header",
	imports: [IconMoon, IconSun, ButtonComponent],
	templateUrl: "./board-header.component.html",
	styleUrl: "./board-header.component.css",
})
export class BoardHeaderComponent {}
