import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import clsx from "clsx";

import styles from "./UIButton.module.scss";

type Variant = "filled" | "outlined" | "clear";
type Size = "small" | "medium" | "large" | "fullwidth";
type Color = "error" | "primary";

interface IUIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	variant?: Variant;
	color?: Color;
	size?: Size;
}

export const UIButton: FC<IUIButtonProps> = ({
	className,
	children,
	size = "medium",
	color = "primary",
	variant = "filled",
	disabled,
	...props
}) => (
	<button
		className={clsx(
			styles.UIButton,
			styles[size],
			styles[color],
			styles[variant],
			disabled && styles.disabled,
			className,
		)}
		disabled={disabled}
		{...props}
	>
		{children}
	</button>
);
