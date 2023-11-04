import { FC } from "react";

import { UIBaseModal } from "../../UIBaseModal/UI/UIBaseModal";
import { UIButton } from "../../UIButton";

import styles from "./UIModal.module.scss";

export interface IUIModalProps {
	className?: string;
	isOpen: boolean;
	onClose?: () => void;
	title: string;
	description?: string;
	onClickButton: () => void;
	btnText: string;
}

export const UIModal: FC<IUIModalProps> = ({
	className,
	title,
	isOpen,
	btnText,
	description,
	onClose,
	onClickButton,
}) => (
	<UIBaseModal className={className} isOpen={isOpen} onClose={onClose}>
		<h2 className={styles.title}>{title}</h2>
		<p className={styles.description}>{description}</p>
		<UIButton size="fullwidth" onClick={onClickButton}>
			{btnText}
		</UIButton>
	</UIBaseModal>
);
