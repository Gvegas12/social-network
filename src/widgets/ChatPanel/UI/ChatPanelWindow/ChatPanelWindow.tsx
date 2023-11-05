import { FC, useEffect, useRef } from "react";

import clsx from "clsx";

import { MessageTest } from "@/entities/model";

import { Message } from "./Message";

import s from "./ChatPanelWindow.module.scss";

interface ChatPanelWindowProps {
	className?: string;
	messages: MessageTest[];
}

export const ChatPanelWindow: FC<ChatPanelWindowProps> = ({
	className,
	messages,
}) => {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		if (wrapper) {
			wrapper.scrollTo({
				top: wrapper.scrollHeight,
				behavior: "smooth",
			});
		}
	}, [messages]);

	return (
		<div ref={wrapperRef} className={clsx(s.ChatPanelWindow, className)}>
			<div className={s.messages}>
				{messages?.map((data, i) => <Message key={i} {...data} />)}
			</div>
		</div>
	);
};
