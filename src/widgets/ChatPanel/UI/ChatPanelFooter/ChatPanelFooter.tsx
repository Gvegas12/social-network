import { FC } from "react";

import clsx from "clsx";

import s from "./ChatPanelFooter.module.scss";

interface ChatPanelFooterProps {
	className?: string;
}

export const ChatPanelFooter: FC<ChatPanelFooterProps> = ({ className }) => {
	return (
		<div className={clsx(s.ChatPanelFooter, className)}>ChatPanelFooter</div>
	);
};
