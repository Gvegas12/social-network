import { StoryFn, Meta } from "@storybook/react";

import { UIButton } from "./UIButton";

export default {
	title: "shared/UI/UIButton",
	component: UIButton,
	argTypes: {},
} as Meta<typeof UIButton>;

const StorybookComponent: StoryFn<typeof UIButton> = (args) => (
	<UIButton {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
	children: "Success",
};
