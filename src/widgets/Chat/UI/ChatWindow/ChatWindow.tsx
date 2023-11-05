import { FC, useEffect, useRef } from "react";

import clsx from "clsx";

import { MessageTest } from "@/entities/model";

import { Message } from "./Message";

import s from "./ChatWindow.module.scss";

interface ChatWindowProps {
	className?: string;
	messages: MessageTest[];
}

export const ChatWindow: FC<ChatWindowProps> = ({ className, messages }) => {
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
		<div
			ref={wrapperRef}
			onContextMenu={(e) => console.log(e)}
			className={clsx(s.ChatWindow, className)}
		>
			<div className={s.messages}>
				{messages?.map((data, i) => <Message key={i} {...data} />)}
			</div>
		</div>
	);
};
