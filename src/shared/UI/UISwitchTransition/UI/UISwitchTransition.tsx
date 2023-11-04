import { FC, ReactNode, Ref } from "react";

import { SwitchTransition, CSSTransition } from "react-transition-group";

import "./UISwitchTransition.scss";

interface IUISwitchTransitionProps {
	animation: "fade-opacity" | "fade-opacity-transform";
	transition_key: string | number;
	nodeRef: Ref<HTMLDivElement>;
	children: ReactNode;
}

export const UISwitchTransition: FC<IUISwitchTransitionProps> = ({
	nodeRef,
	children,
	animation,
	transition_key,
}) => {
	return (
		<SwitchTransition mode="out-in">
			<CSSTransition
				key={transition_key}
				nodeRef={nodeRef}
				addEndListener={(done: any): void => {
					if (nodeRef) {
						const nodeWithCurrent = nodeRef as { current: HTMLDivElement };
						nodeWithCurrent.current.addEventListener(
							"transitionend",
							done,
							false,
						);
					}
				}}
				classNames={`animation-${animation}`}
			>
				<div ref={nodeRef} className={`animation-${animation}`}>
					{children}
				</div>
			</CSSTransition>
		</SwitchTransition>
	);
};
