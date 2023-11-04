import { FC } from "react";

import styles from "./UIPageHead.module.scss";

interface IUIPageHeadProps {
	title?: string;
	description?: string;
	children?: React.ReactNode;
}

export const UIPageHead: FC<IUIPageHeadProps> = ({
	title,
	description,
	children,
}) => (
	<>
		{title && <h4 className={styles.title}>{title}</h4>}
		{description && <p className={styles.text}>{description}</p>}
		{children}
	</>
);
