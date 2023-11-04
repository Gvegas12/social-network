import { StoryFn, Meta } from "@storybook/react";

import { UIButton } from "../../UIButton";

import { UIBox } from "./UIBox";

export default {
	title: "shared/UI/UIBox",
	component: UIBox,
	argTypes: {},
} as Meta<typeof UIBox>;

const StorybookComponent: StoryFn<typeof UIBox> = (args) => <UIBox {...args} />;

export const Primary = StorybookComponent.bind({});
Primary.args = {
	children: (
		<div>
			<h4 style={{ marginBottom: 20 }}>Заголовок</h4>
			<p style={{ marginBottom: 20 }}>Описание</p>
			<UIButton>Продолжить</UIButton>
		</div>
	),
};
