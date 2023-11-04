import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UILoader } from "./UILoader";

export default {
	title: "shared/UI/UILoader",
	component: UILoader,
	argTypes: {},
} as ComponentMeta<typeof UILoader>;

const StorybookComponent: ComponentStory<typeof UILoader> = (args) => (
	<UILoader {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
