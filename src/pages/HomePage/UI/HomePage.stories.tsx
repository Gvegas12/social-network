import { StoryFn, Meta } from "@storybook/react";

import HomePage from "./HomePage";

export default {
	title: "shared/UI/HomePage",
	component: HomePage,
	argTypes: {},
} as Meta<typeof HomePage>;

const StoryComponent: StoryFn<typeof HomePage> = (args) => (
	<HomePage {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
