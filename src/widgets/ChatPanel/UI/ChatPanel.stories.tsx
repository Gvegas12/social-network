import { StoryFn, Meta } from "@storybook/react";

import { ChatPanel } from "./ChatPanel";

export default {
	title: "shared/UI/ChatPanel",
	component: ChatPanel,
	argTypes: {},
} as Meta<typeof ChatPanel>;

const StoryComponent: StoryFn<typeof ChatPanel> = (args) => (
	<ChatPanel {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
