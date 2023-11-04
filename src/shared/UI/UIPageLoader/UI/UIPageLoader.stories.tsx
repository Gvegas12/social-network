import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UIPageLoader } from "./UIPageLoader";

export default {
	title: "shared/UI/UIPageLoader",
	component: UIPageLoader,
	argTypes: {},
} as ComponentMeta<typeof UIPageLoader>;

const StorybookComponent: ComponentStory<typeof UIPageLoader> = (args) => (
	<UIPageLoader {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
