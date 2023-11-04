import { FC, ReactNode } from "react";

import { createPortal } from "react-dom";

interface IUIPortalProps {
	children: ReactNode;
	element?: HTMLElement;
	isOpen: boolean;
}

export const UIPortal: FC<IUIPortalProps> = ({
	children,
	element = document.body,
	isOpen,
}) => (isOpen ? createPortal(children, element) : null);
