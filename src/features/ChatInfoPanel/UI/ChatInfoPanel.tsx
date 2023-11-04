import { FC, memo } from "react";

import UI from "@/shared/UI";

import s from "./ChatInfoPanel.module.scss";

interface IChatInfoPanelProps {
	name: string;
	description: string;
}

export const ChatInfoPanel: FC<IChatInfoPanelProps> = memo(
	({ name, description }) => {
		return (
			<div className={s.ChatInfoPanel}>
				<UI.Avatar />
				<div className={s.info}>
					<p className={s.name}>{name}</p>
					<p className={s.description}>{description}</p>
				</div>
			</div>
		);
	},
);
