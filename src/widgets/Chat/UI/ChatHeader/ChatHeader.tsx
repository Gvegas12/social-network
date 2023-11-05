import { FC } from "react";

import clsx from "clsx";

import { ChatInfoPanel } from "@/features/ChatInfoPanel";

import PhoneIcon from "./icons/phone.svg";

import s from "./ChatHeader.module.scss";

interface ChatHeaderProps {
	className?: string;
}

export const ChatHeader: FC<ChatHeaderProps> = ({ className }) => {
	return (
		<div className={clsx(s.ChatHeader, className)}>
			<div className={s.info}>
				<ChatInfoPanel name="Jake Cooley" description="last seen recently" />
			</div>
			<div className={s.actions}>
				<PhoneIcon className={s.icon} />
			</div>
		</div>
	);
};
