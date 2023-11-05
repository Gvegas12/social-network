import { StoryFn, Meta } from "@storybook/react";

import { Chat } from "./Chat";

export default {
	title: "shared/UI/Chat",
	component: Chat,
	argTypes: {},
} as Meta<typeof Chat>;

const StoryComponent: StoryFn<typeof Chat> = (args) => <Chat {...args} />;

export const Primary = StoryComponent.bind({});
Primary.args = {};
