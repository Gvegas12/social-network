import { FC, useEffect, useRef } from "react";

import clsx from "clsx";

import { IUIModalProps, UIModal } from "../../UIModal";

import styles from "./UIPageErrorModal.module.scss";

interface IUIPageErrorModalProps extends Omit<IUIModalProps, "onClickButton"> {
	onClose(): void;
}

export const UIPageErrorModal: FC<IUIPageErrorModalProps> = ({
	className,
	onClose,
	isOpen,
	...props
}) => {
	const rootRef = useRef<HTMLDivElement | null>(
		document.getElementById("root") as HTMLDivElement | null,
	);

	useEffect(() => {
		if (isOpen) {
			const root = rootRef.current;
			if (!root) return;

			root?.setAttribute("style", "filter: blur(5px)");
		}
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<UIModal
			isOpen={isOpen}
			onClickButton={() => {
				const root = rootRef.current;
				if (!root) return;

				root.removeAttribute("style");

				onClose();
			}}
			className={clsx(className, styles.UIPageErrorModal)}
			{...props}
		/>
	);
};
