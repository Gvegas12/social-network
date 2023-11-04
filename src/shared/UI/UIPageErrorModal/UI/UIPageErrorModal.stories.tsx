import { StoryFn, Meta } from "@storybook/react";

import { UIPageErrorModal } from "./UIPageErrorModal";

export default {
	title: "shared/UI/UIPageErrorModal",
	component: UIPageErrorModal,
	argTypes: {},
} as Meta<typeof UIPageErrorModal>;

const StorybookComponent: StoryFn<typeof UIPageErrorModal> = (args) => (
	<UIPageErrorModal {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
