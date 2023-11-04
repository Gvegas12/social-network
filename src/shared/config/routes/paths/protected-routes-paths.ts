const APP_BASE_URL = import.meta.env.BASE_URL;

export const protectedRoutePaths = {
	home: `${APP_BASE_URL}`,
	about: `${APP_BASE_URL}about`,
	settings: `${APP_BASE_URL}settings`,
	support: `${APP_BASE_URL}support`,
};
