import { Component, Input } from "@angular/core";
import type { ButtonSize, ButtonVariant } from "./types";

@Component({
	selector: "app-button",
	templateUrl: "./button.component.html",
})
export class ButtonComponent {
	@Input() className = "";
	@Input() size: ButtonSize = "default";
	@Input() variant: ButtonVariant = "primary";

	get sizeClass() {
		const sizes: Record<ButtonSize, string> = {
			default: "",
			small: "text-sm py-0.5",
			large: "h-12 px-6",
		};

		return sizes[this.size] || "";
	}

	get variantClass() {
		const variants: Record<ButtonVariant, string> = {
			primary: "bg-primary text-white",
			ghost: "border-none",
			outline: "border",
		};

		return variants[this.variant];
	}
}
