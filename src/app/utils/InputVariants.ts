import { type VariantProps, tv } from 'tailwind-variants';

export const InputVariants = tv({
  base: 'bg-card-background mb-2 w-full rounded-md text-start text-sm font-light placeholder:text-foreground focus:outline-1 focus:outline-primary',
  variants: {
    variant: {
      default: 'p-2',
      large: 'h-16 px-2 pt-2 pb-8',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type InputVariantTypes = VariantProps<typeof InputVariants>;
