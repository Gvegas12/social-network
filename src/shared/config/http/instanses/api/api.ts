import axios from "axios";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "..";

export const LOCAL_STORAGE_X_USER_ID = "xuid";

export const $api = axios.create({
	baseURL: __API_URL__,
});

$api.interceptors.request.use((config) => {
	config.headers["x-user-id"] = localStorage.getItem(LOCAL_STORAGE_X_USER_ID);
	config.headers.Authorization = `Bearer ${localStorage.getItem(
		LOCAL_STORAGE_ACCESS_TOKEN,
	)}`;
	return config;
});
