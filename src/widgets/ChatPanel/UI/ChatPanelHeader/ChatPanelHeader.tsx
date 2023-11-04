import { FC } from "react";

import clsx from "clsx";

import { ChatInfoPanel } from "@/features/ChatInfoPanel";
import UI from "@/shared/UI";

import PhoneIcon from "./phone.svg";

import s from "./ChatPanelHeader.module.scss";

interface ChatPanelHeaderProps {
	className?: string;
}

export const ChatPanelHeader: FC<ChatPanelHeaderProps> = ({ className }) => {
	return (
		<div className={clsx(s.ChatPanelHeader, className)}>
			<div className={s.info}>
				<ChatInfoPanel name="Name" description="Description" />
			</div>
			<div className={s.actions}>
				<PhoneIcon className={s.icon} />
				<UI.Button>UIButton</UI.Button>
			</div>
		</div>
	);
};
