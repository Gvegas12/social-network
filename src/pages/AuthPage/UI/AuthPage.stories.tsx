import { StoryFn, Meta } from "@storybook/react";

import AuthPage from "./AuthPage";

export default {
	title: "shared/UI/AuthPage",
	component: AuthPage,
	argTypes: {},
} as Meta<typeof AuthPage>;

const StoryComponent: StoryFn<typeof AuthPage> = (args) => (
	<AuthPage {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
