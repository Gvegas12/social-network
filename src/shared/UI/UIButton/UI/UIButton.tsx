import { FC, ReactNode } from "react";

import clsx from "clsx";

import s from "./UIButton.module.scss";

interface UIButtonProps {
	className?: string;
	children: ReactNode;
}

export const UIButton: FC<UIButtonProps> = ({ className, children }) => {
	return <div className={clsx(s.UIButton, className)}>{children}</div>;
};
