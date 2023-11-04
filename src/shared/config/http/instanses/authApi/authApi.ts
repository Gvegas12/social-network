import axios from "axios";

export const LOCAL_STORAGE_ACCESS_TOKEN = "access_token";
export const LOCAL_STORAGE_IP_ADDRESS = "ip_address";

const $authApi = axios.create({
	baseURL: __AUTH_API_URL__,
});

export { $authApi };
