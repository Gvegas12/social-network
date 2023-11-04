import { FC, useEffect, useRef } from "react";

import clsx from "clsx";

import { IUILoaderProps, UILoader } from "../../UILoader";
import { UIPortal } from "../../UIPortal";

import styles from "./UIPageLoader.module.scss";

interface IUIPageLoaderProps extends IUILoaderProps {}

export const UIPageLoader: FC<IUIPageLoaderProps> = ({
	className,
	variant,
}) => {
	const rootRef = useRef<HTMLDivElement | null>(
		document.getElementById("root") as HTMLDivElement | null,
	);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) return;

		root?.setAttribute("style", "filter: blur(5px)");

		return () => {
			root.setAttribute("style", "");
		};
	}, []);

	return (
		<UIPortal isOpen>
			<div className={clsx(styles.UIPageLoader, className)}>
				<UILoader variant={variant} className={styles.loader} />
			</div>
		</UIPortal>
	);
};
