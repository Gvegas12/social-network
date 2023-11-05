import { FC } from "react";

import s from "./MessageName.module.scss";

interface MessageNameProps {}

export const MessageName: FC<MessageNameProps> = () => {
	return <p className={s.name}>Alex Gvegas</p>;
};
