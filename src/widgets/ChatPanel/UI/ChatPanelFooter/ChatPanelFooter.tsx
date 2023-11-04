import { FC } from "react";

import clsx from "clsx";

import { ChatInputPanel } from "./ChatInputPanel";

import s from "./ChatPanelFooter.module.scss";

interface ChatPanelFooterProps {
	className?: string;
}

export const ChatPanelFooter: FC<ChatPanelFooterProps> = ({ className }) => {
	return (
		<div className={clsx(s.ChatPanelFooter, className)}>
			<ChatInputPanel />
		</div>
	);
};
