import { FC } from "react";

import clsx from "clsx";

import styles from "./ChatInfoSection.module.scss";

interface ChatInfoSectionProps {
	className?: string;
}

export const ChatInfoSection: FC<ChatInfoSectionProps> = ({ className }) => {
	return (
		<div className={clsx(styles.ChatInfoSection, className)}>
			ChatInfoSection
		</div>
	);
};
