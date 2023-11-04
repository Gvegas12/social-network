import { FC, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import MainLayout from "@/processes/MainLayout";
import { protectedRoutePaths } from "@/shared/config/routes";

import { protectedRoutesConfig, publicRoutesConfig } from "../../config";
import { ProtectedRoutesProxy } from "../ProtectedRoutesProxy/ProtectedRoutesProxy";

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route element={<MainLayout />} path={protectedRoutePaths.home}>
				{publicRoutesConfig.map(({ path, element }, i) => (
					<Route
						key={i}
						path={path}
						element={
							<Suspense fallback={<div>loading...</div>}>{element}</Suspense>
						}
					/>
				))}
				{protectedRoutesConfig.map(({ path, element }, i) => (
					<Route
						key={i}
						path={path}
						element={
							<ProtectedRoutesProxy>
								<Suspense fallback={<div>loading...</div>}>{element}</Suspense>
							</ProtectedRoutesProxy>
						}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default AppRouter;
