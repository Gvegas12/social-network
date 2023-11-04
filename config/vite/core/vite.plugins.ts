import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import { visualizer } from "rollup-plugin-visualizer";
// import { ViteBuildConfigOptions } from ".";

export const vitePlugins = () =>
	// { isDev }: ViteBuildConfigOptions
	{
		const plugins = [
			react(),
			svgr({ exportAsDefault: true }),
			viteStaticCopy({
				targets: [
					{
						src: "deploy/nginx",
						dest: "config",
					},
				],
			}),
		];

		// if (isDev) {
		//   plugins.push(
		//     visualizer({
		//       template: "treemap", // or sunburst
		//       open: true,
		//       gzipSize: true,
		//       brotliSize: true,
		//       // filename: "analyse.html", // will be saved in project's root
		//     })
		//   );
		// }

		return plugins;
	};
