import { FC } from "react";

import clsx from "clsx";

import { UserAvatar } from "@/entities/user";

import s from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

const mock_arr = Array.from(Array(10).keys());

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	return (
		<div className={clsx(s.Sidebar, className)}>
			{mock_arr.map((_, i) => (
				<UserAvatar key={i} />
			))}
		</div>
	);
};
