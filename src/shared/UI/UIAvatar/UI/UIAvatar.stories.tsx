import { StoryFn, Meta } from "@storybook/react";

import { UIAvatar } from "./UIAvatar";

export default {
	title: "shared/UI/UIAvatar",
	component: UIAvatar,
	argTypes: {},
} as Meta<typeof UIAvatar>;

const StoryComponent: StoryFn<typeof UIAvatar> = (args) => (
	<UIAvatar {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
