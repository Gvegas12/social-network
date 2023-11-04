import { StoryFn, Meta } from "@storybook/react";

import SettingsPage from "./SettingsPage";

export default {
	title: "shared/UI/SettingsPage",
	component: SettingsPage,
	argTypes: {},
} as Meta<typeof SettingsPage>;

const StoryComponent: StoryFn<typeof SettingsPage> = (args) => (
	<SettingsPage {...args} />
);

export const Primary = StoryComponent.bind({});
Primary.args = {};
