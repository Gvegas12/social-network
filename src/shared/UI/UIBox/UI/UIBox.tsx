import { ReactNode, FC, MouseEvent } from "react";

import clsx from "clsx";

import styles from "./UIBox.module.scss";

interface IUIBoxProps {
	children: ReactNode;
	className?: string;
	onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const UIBox: FC<IUIBoxProps> = ({ className, children, onClick }) => (
	<div onClick={onClick} className={clsx(styles.UIBox, className)}>
		{children}
	</div>
);
