import { FC } from "react";

import clsx from "clsx";

import { MessageTest } from "@/entities/model";

import { MessageName } from "./MessageName";
import { MessageText } from "./MessageText";

import s from "./Message.module.scss";

interface MessageProps extends MessageTest {}

export const Message: FC<MessageProps> = ({ text, type }) => {
	return (
		<div className={clsx(s.Message, s[type])}>
			<MessageName />
			<MessageText text={text} type={type} />
		</div>
	);
};
