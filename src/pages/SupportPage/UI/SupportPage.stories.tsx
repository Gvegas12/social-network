import { StoryFn, Meta } from "@storybook/react";

import SupportPage from "./SupportPage";

export default {
	title: "shared/UI/SupportPage",
	component: SupportPage,
	argTypes: {},
} as Meta<typeof SupportPage>;

const StoryComponent: StoryFn<typeof SupportPage> = (args) => (
	<SupportPage {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
