import { FC } from "react";

import clsx from "clsx";

import { ChatPanelFooter } from "./ChatPanelFooter/ChatPanelFooter";
import { ChatPanelHeader } from "./ChatPanelHeader/ChatPanelHeader";
import { ChatPanelWindow } from "./ChatPanelWindow/ChatPanelWindow";

import s from "./ChatPanel.module.scss";

interface ChatPanelProps {
	className?: string;
}

export const ChatPanel: FC<ChatPanelProps> = ({ className }) => {
	return (
		<div className={clsx(s.ChatPanel, className)}>
			<ChatPanelHeader />
			<ChatPanelWindow />
			<ChatPanelFooter />
		</div>
	);
};
