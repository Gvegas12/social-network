import { FC, memo } from "react";

import s from "./UserAvatar.module.scss";

interface IUserAvatarProps {}

export const UserAvatar: FC<IUserAvatarProps> = memo(() => {
	return <div className={s.UserAvatar} />;
});
