import { FC } from "react";

import clsx from "clsx";

import LoaderDoneIcon from "./icons/loader_done.svg";
import LoaderPendingIcon from "./icons/loader_pending.svg";

import styles from "./UILoader.module.scss";

export interface IUILoaderProps {
	className?: string;
	variant?: "done" | "pending";
}

export const UILoader: FC<IUILoaderProps> = ({
	className,
	variant = "pending",
}) => {
	switch (variant) {
		case "done":
			return <LoaderDoneIcon className={clsx(styles.UILoader, className)} />;

		default:
			return <LoaderPendingIcon className={clsx(styles.UILoader, className)} />;
	}
};
