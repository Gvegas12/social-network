import { FC, useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { MessageTest } from "@/entities/model";

import { ChatPanelFooter } from "./ChatPanelFooter/ChatPanelFooter";
import { ChatPanelHeader } from "./ChatPanelHeader/ChatPanelHeader";
import { ChatPanelWindow } from "./ChatPanelWindow/ChatPanelWindow";

import s from "./ChatPanel.module.scss";

interface ChatPanelProps {
	className?: string;
}

export const ChatPanel: FC<ChatPanelProps> = ({ className }) => {
	const socketRef = useRef<WebSocket>(new WebSocket("ws://localhost:8080/ws"));
	const [messages, setMessages] = useState<MessageTest[]>([
		{
			type: "to",
			text: "Привет, @alias, это User @lasvegas-TEST",
		},
		{
			type: "from",
			text: "Привет, @alias, это User @lasvegas-TEST",
		},
	]);

	useEffect(() => {
		const socket = socketRef.current;

		socket.onmessage = (event: MessageEvent<string>) => {
			console.log({ event });
			console.log("received from the server: ", event.data);

			setMessages((prev) => [...prev, { text: event.data, type: "to" }]);
		};
	}, []);

	const onSubmitMessage = (message: string) => {
		const socket = socketRef.current;
		socket.send(message);
	};

	return (
		<div className={clsx(s.ChatPanel, className)}>
			<ChatPanelHeader />
			<ChatPanelWindow messages={messages} />
			<ChatPanelFooter onSubmit={onSubmitMessage} />
		</div>
	);
};
