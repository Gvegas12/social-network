import { FC } from "react";

import clsx from "clsx";

import s from "./UIAvatar.module.scss";

export interface UIAvatarProps {
	className?: string;
	active?: boolean;
}

export const UIAvatar: FC<UIAvatarProps> = ({ className, active }) => {
	return <div className={clsx(s.UIAvatar, active && s.active, className)} />;
};
