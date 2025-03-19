import { cva, VariantProps } from "class-variance-authority";
import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { A } from "@solidjs/router";
import { cn } from "../../util";

const buttonVariants = cva(
	"inline-flex gap-4 items-center rounded-md w-max cursor-pointer",
	{
		variants: {
			variant: {
				default:
					"text-slate-100 dark:text-slate-900 bg-slate-700 dark:bg-slate-300 hover:bg-slate-900 dark:hover:bg-slate-50",
				secondary:
					"bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600",
				destructive: "bg-red-600/50 hover:bg-red-600/75",
				outline:
					"shadow-slate-300 dark:shadow-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 shadow-[inset_0_0_0_2px]",
				ghost: "hover:bg-slate-300 dark:hover:bg-slate-700",
			},
			size: {
				default: "font-semibold px-4 py-2 [&>span]:-mt-0.5",
				icon: "p-2",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	href?: string;
	extra?: string | undefined;
}

const Button: Component<ButtonProps> = (props) => {
	const comp = props.href ? A : "button";
	const { variant, size, extra } = props;
	props.extra = undefined;

	return (
		<Dynamic
			component={comp}
			class={cn(buttonVariants({ variant, size }), extra)}
			{...props}
		></Dynamic>
	);
};

export { Button, buttonVariants as variants };
