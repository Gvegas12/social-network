import { forwardRef, KeyboardEvent } from "react";

import clsx from "clsx";
import { Control, useController } from "react-hook-form";

import styles from "./UIInputNext.module.scss";

interface IUIInputNextProps {
	name: string;
	control: Control<any>;
	className?: string;
	onKeyUpInput?(e: KeyboardEvent<HTMLInputElement>): void;
}

export const UIInputNext = forwardRef<HTMLInputElement, IUIInputNextProps>(
	({ control, name, className, onKeyUpInput }, ref) => {
		const { field } = useController({ name, control });

		return (
			<input
				onKeyUp={onKeyUpInput}
				className={clsx(styles.UIInputNext, className)}
				type="number"
				maxLength={1}
				onInput={(e) => {
					if (Number(e.currentTarget.value.length) > 0)
						e.currentTarget.value = e.currentTarget.value.slice(0, 1);
				}}
				{...field}
				ref={ref}
				value={field.value || ""}
			/>
		);
	},
);
