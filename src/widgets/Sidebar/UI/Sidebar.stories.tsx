import { StoryFn, Meta } from "@storybook/react";

import { Sidebar } from "./Sidebar";

export default {
	title: "shared/UI/Sidebar",
	component: Sidebar,
	argTypes: {},
} as Meta<typeof Sidebar>;

const StoryComponent: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = StoryComponent.bind({});
Primary.args = {};
