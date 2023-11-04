import { FC, memo } from "react";

import { UserAvatar } from "../../UserAvatar";

import s from "./UserProfilePanel.module.scss";

interface IUserProfilePanelProps {
	name: string;
	activity: string;
}

export const UserProfilePanel: FC<IUserProfilePanelProps> = memo(
	({ name, activity }) => {
		return (
			<div className={s.UserProfilePanel}>
				<UserAvatar />
				<div className={s.info}>
					<p className={s.name}>{name}</p>
					<p className={s.activity}>{activity}</p>
				</div>
			</div>
		);
	},
);
