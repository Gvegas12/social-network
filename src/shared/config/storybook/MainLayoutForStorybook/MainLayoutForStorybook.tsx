import { FC, ReactNode } from "react";

import { Sidebar } from "@/widgets/Sidebar";

interface IMainLayoutForStorybookProps {
	children: ReactNode;
}

const MainLayoutForStorybook: FC<IMainLayoutForStorybookProps> = ({
	children,
}) => {
	return (
		<div className="MainLayout">
			<Sidebar />
			<div className="page-wrapper">{children}</div>
		</div>
	);
};

export default MainLayoutForStorybook;
