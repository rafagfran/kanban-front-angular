import { Component } from "@angular/core";
import { ButtonComponent } from "../../shared/button/button.component";
import { IconMenu } from "../../svg/icons/menu.component";

@Component({
	selector: "app-header",
	imports: [ButtonComponent, IconMenu],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
})
export class HeaderComponent {}
