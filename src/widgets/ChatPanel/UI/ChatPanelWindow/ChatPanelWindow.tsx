import { FC, useEffect, useRef, useState } from "react";

import clsx from "clsx";

import s from "./ChatPanelWindow.module.scss";

interface ChatPanelWindowProps {
	className?: string;
	socket: WebSocket;
}

type MessageTest = {
	type: "from" | "to";
	text: string;
};

const mockMessagesData: MessageTest[] = [
	{
		type: "to",
		text: "[TO] text message",
	},
	{
		type: "from",
		text: "[FROM] text message",
	},
];

export const ChatPanelWindow: FC<ChatPanelWindowProps> = ({
	className,
	socket,
}) => {
	const [messages, setMessages] = useState<MessageTest[]>(mockMessagesData);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log({ socket });

		socket.onmessage = (event: MessageEvent<string>) => {
			console.log({ event });
			console.log("received from the server: ", event.data);

			setMessages((prev) => [...prev, { text: event.data, type: "to" }]);
		};
	}, [socket]);

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
				{messages?.map(({ text, type }, i) => (
					<div className={clsx(s.message, s[type])} key={i}>
						<p className={s.messageText}>{text}</p>
					</div>
				))}
			</div>
		</div>
	);
};
