import { FC } from "react";

import s from "./MessageUserName.module.scss";

interface MessageUserNameProps {
	name: string;
}

export const MessageUserName: FC<MessageUserNameProps> = ({ name }) => {
	return <p className={s.MessageUserName}>{name}</p>;
};
