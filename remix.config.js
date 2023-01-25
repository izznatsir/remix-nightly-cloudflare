/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	future: {
		unstable_dev: {
			appServerPort: 8788,
			port: 3010,
		},
	},
	serverBuildTarget: "cloudflare-pages",
	server: "./server.js",
	ignoredRouteFiles: ["**/.*"],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "functions/[[path]].js",
	// publicPath: "/build/",
};
