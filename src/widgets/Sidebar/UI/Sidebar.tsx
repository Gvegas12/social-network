import { FC } from "react";

import clsx from "clsx";

import UI from "@/shared/UI";

import s from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

const mock_arr = Array.from(Array(10).keys());

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	return (
		<div className={clsx(s.Sidebar, className)}>
			{mock_arr.map((_, i) => (
				<UI.Avatar key={i} />
			))}
		</div>
	);
};
