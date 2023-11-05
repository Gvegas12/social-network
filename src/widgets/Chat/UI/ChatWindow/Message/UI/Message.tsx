import { FC } from "react";

import clsx from "clsx";

import { MessageTest } from "@/entities/model";

import { MessageText } from "./MessageText";

import s from "./Message.module.scss";

interface MessageProps extends MessageTest {}

export const Message: FC<MessageProps> = ({ text, type }) => {
	return (
		<div className={clsx(s.message, s[type])}>
			[{type.toUpperCase()}]
			<MessageText text={text} />
		</div>
	);
};
