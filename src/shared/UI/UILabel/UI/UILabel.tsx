import { FC, LabelHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

import styles from "./UILabel.module.scss";

export interface IUILabelProps
	extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor"> {
	children: ReactNode;
	className?: string;
	required?: boolean;
	htmlFor: string;
}

export const UILabel: FC<IUILabelProps> = ({
	className,
	required,
	children,
	htmlFor,
	...props
}) => (
	<label
		{...props}
		data-testid="UILabel"
		className={clsx(styles.UILabel, className)}
		htmlFor={htmlFor}
	>
		<div className={styles.labelText}>
			<span>{children}</span>
			{required && <span className={styles.asterisk}>*</span>}
		</div>
	</label>
);
