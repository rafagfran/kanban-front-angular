import { Component, Input } from "@angular/core";
import { type ButtonVariants, button } from "../../utils/ButtonVariants";

@Component({
	selector: "app-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
	@Input() class = "";
	@Input() variant: ButtonVariants["variant"];
	@Input() size: ButtonVariants["size"];

	get classes(): string {
		return button({
			variant: this.variant,
			size: this.size,
			class: this.class,
		});
	}
}
