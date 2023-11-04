import { FC } from "react";

import clsx from "clsx";

import s from "./ChatPanelWindow.module.scss";

interface ChatPanelWindowProps {
	className?: string;
}

export const ChatPanelWindow: FC<ChatPanelWindowProps> = ({ className }) => {
	return (
		<div className={clsx(s.ChatPanelWindow, className)}>ChatPanelWindow</div>
	);
};
