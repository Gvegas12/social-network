import { FC } from "react";

import clsx from "clsx";

import { MessageTest } from "@/entities/model";

import s from "./MessageDate.module.scss";

interface MessageDateProps extends Pick<MessageTest, "type"> {}

export const MessageDate: FC<MessageDateProps> = ({ type }) => {
	return <p className={clsx(s.MessageDate, s[type])}>11:18</p>;
};
