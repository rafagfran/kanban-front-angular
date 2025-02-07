import { type VariantProps, tv } from "tailwind-variants";

export const button = tv({
	base: "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			outline: "border border bg-background shadow-sm hover:bg-primary-accent",
			secondary:
				"bg-primary-accent text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-white/10",
      dotted: "border border-dotted  border-primary w-full",
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 px-3 text-xs",
			lg: "h-10 px-8",
			icon: "h-9 w-9",
		},
	},
	compoundVariants: [
		{
			size: ["sm", "lg"],
			class: "rounded-md",
		},
	],
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export type ButtonVariants = VariantProps<typeof button>;
