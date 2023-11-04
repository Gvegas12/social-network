import { HTMLProps, useId, ChangeEvent, forwardRef } from "react";

import clsx from "clsx";

import { IUILabelProps, UILabel } from "../../UILabel";

import styles from "./UIBaseInputText.module.scss";

type UIBaseFiledSizes = "fullwidth" | "medium";

type HTMLInputProps = Omit<
	HTMLProps<HTMLInputElement>,
	"size" | "label" | "onChange" | "className"
>;
export interface IUIBaseInputTextProps extends HTMLInputProps {
	required?: boolean;
	size?: UIBaseFiledSizes;
	labelProps?: Omit<IUILabelProps, "children">;
	label?: string | null;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	inputClassName?: string;
}

export const UIBaseInputText = forwardRef<
	HTMLInputElement,
	IUIBaseInputTextProps
>(
	(
		{
			className,
			label,
			required,
			labelProps,
			size = "medium",
			value,
			inputClassName,
			...props
		}: IUIBaseInputTextProps,
		ref,
	) => {
		const inputLabelId = useId();

		return (
			<div
				data-testid="UIBaseInputText"
				className={clsx(styles.UIBaseInputText, styles[size], className)}
			>
				{label && (
					<UILabel
						htmlFor={inputLabelId}
						required={required}
						{...labelProps}
						className={clsx(styles.label, labelProps?.className)}
					>
						{label}
					</UILabel>
				)}
				<input
					id={inputLabelId}
					{...props}
					ref={ref}
					value={value || ""}
					className={clsx(styles.input, inputClassName)}
				/>
			</div>
		);
	},
);
