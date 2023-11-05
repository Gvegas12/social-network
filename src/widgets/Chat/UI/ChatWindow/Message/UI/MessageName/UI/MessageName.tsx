import { FC } from "react";

import s from "./MessageName.module.scss";

interface MessageNameProps {
	name: string;
}

export const MessageName: FC<MessageNameProps> = ({ name }) => {
	return <p className={s.MessageName}>{name}</p>;
};
