import { StoryFn, Meta } from "@storybook/react";

import { UIButton } from "./UIButton";

export default {
	title: "shared/UI/UIButton",
	component: UIButton,
	argTypes: {},
} as Meta<typeof UIButton>;

const StoryComponent: StoryFn<typeof UIButton> = (args) => (
	<UIButton {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
