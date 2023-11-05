export type MessageTest = {
	type: "from" | "to";
	text: string;
};

export type Chat = {
	// id: number;
	// user_ids: number[];
	messages: MessageTest[];
	// created_at: string;
	// updated_at: string;
};

export type User = {
	// id: number;
	// account_id: number;
	// last_activity: string;
	// created_at: string;
	// updated_at: string;
};
