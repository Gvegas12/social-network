import { FC } from "react";

import clsx from "clsx";

import s from "./UIAvatar.module.scss";

interface UIAvatarProps {
	className?: string;
}

export const UIAvatar: FC<UIAvatarProps> = ({ className }) => {
	return <div className={clsx(s.UIAvatar, className)} />;
};
