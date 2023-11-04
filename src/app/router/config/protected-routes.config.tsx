import { RouteProps } from "react-router-dom";

import { protectedRoutePaths } from "@/shared/config/routes";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import SettingsPage from "@/pages/SettingsPage";
import SupportPage from "@/pages/SupportPage";

export const protectedRoutesConfig: RouteProps[] = [
	{
		path: protectedRoutePaths.home,
		element: <HomePage />,
	},
	{
		path: protectedRoutePaths.about,
		element: <AboutPage />,
	},
	{
		path: protectedRoutePaths.settings,
		element: <SettingsPage />,
	},
	{
		path: protectedRoutePaths.support,
		element: <SupportPage />,
	},
];
