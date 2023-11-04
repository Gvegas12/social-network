import { StoryFn, Meta } from "@storybook/react";

import AboutPage from "./AboutPage";

export default {
	title: "shared/UI/AboutPage",
	component: AboutPage,
	argTypes: {},
} as Meta<typeof AboutPage>;

const StoryComponent: StoryFn<typeof AboutPage> = (args) => (
	<AboutPage {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
