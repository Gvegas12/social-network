import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { storeWithShallow } from "@/shared/lib";

import { User } from "../types";

interface UserStore {
	user: User | null;
	setUser(user: User): void;
}

const store = create(
	devtools(
		immer<UserStore>((set) => ({
			user: null,
			setUser(user) {
				set({ user });
			},
		})),
	),
);

const useUserStore = storeWithShallow<UserStore>(store);

export { useUserStore, store as UserStore };
