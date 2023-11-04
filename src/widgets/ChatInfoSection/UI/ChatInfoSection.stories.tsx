import { StoryFn, Meta } from "@storybook/react";

import { ChatInfoSection } from "./ChatInfoSection";

export default {
	title: "shared/UI/ChatInfoSection",
	component: ChatInfoSection,
	argTypes: {},
} as Meta<typeof ChatInfoSection>;

const StoryComponent: StoryFn<typeof ChatInfoSection> = (args) => (
	<ChatInfoSection {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
