import { FC } from "react";

import { Outlet } from "react-router-dom";

import { Sidebar } from "@/widgets/Sidebar";

const MainLayout: FC = () => {
	return (
		<main className="MainLayout">
			<Sidebar />
			<div className="page-wrapper">
				<div className="page">
					<Outlet />
				</div>
			</div>
		</main>
	);
};

export default MainLayout;
