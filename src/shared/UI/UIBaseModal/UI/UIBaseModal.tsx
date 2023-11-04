import { FC, ReactNode, useCallback, useEffect, MouseEvent } from "react";

import clsx from "clsx";

import { UIBox } from "../../UIBox";
import { UIPortal } from "../../UIPortal";

import styles from "./UIBaseModal.module.scss";

export interface IUIBaseModalProps {
	children?: ReactNode;
	className?: string;
	isOpen: boolean;
	onClose?: () => void;
}
/* 98412817 */
export const UIBaseModal: FC<IUIBaseModalProps> = ({
	className,
	children,
	isOpen,
	onClose,
}) => {
	const onCloseHandler = useCallback((): void => {
		onClose?.();
	}, [onClose]);

	const onContentClick = (e: MouseEvent): void => {
		e.stopPropagation();
	};

	// TODO
	// const onKeyDown = useCallback(
	//   (e: KeyboardEvent): void => {
	//     if (e.key === "Escape") {
	//       onCloseHandler();
	//     }
	//   },
	//   [onCloseHandler]
	// );

	useEffect(() => {
		if (isOpen) {
			// window.addEventListener("keydown", onKeyDown);
			document.body.setAttribute("style", "overflow: hidden;");
		}

		return () => {
			// window.removeEventListener("keydown", onKeyDown);
			document.body.removeAttribute("style");
		};
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<UIPortal isOpen={isOpen}>
			<div
				className={clsx(styles.UIBaseModal, isOpen && styles.opened)}
				data-testid="UIBaseModal"
				onClick={onCloseHandler}
			>
				<div className={styles.overlay}>
					<UIBox
						className={clsx(styles.content, className)}
						onClick={onContentClick}
					>
						{children}
					</UIBox>
				</div>
			</div>
		</UIPortal>
	);
};
