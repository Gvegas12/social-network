import { StoryFn, Meta } from "@storybook/react";

import { UILabel } from "./UILabel";

export default {
	title: "shared/UI/UILabel",
	component: UILabel,
	argTypes: {},
} as Meta<typeof UILabel>;

const StorybookComponent: StoryFn<typeof UILabel> = (args) => (
	<UILabel {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
	children: "Some Input Label",
};
