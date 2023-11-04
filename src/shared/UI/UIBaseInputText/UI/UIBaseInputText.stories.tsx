import { useState } from "react";

import { Meta, StoryFn } from "@storybook/react";

import { UIBaseInputText, IUIBaseInputTextProps } from "./UIBaseInputText";

export default {
	title: "shared/UI/UIBaseInputText",
	component: UIBaseInputText,
} as Meta<typeof UIBaseInputText>;

const StorybookComponent: StoryFn<IUIBaseInputTextProps> = () => {
	const [value, setValue] = useState("");

	return (
		<UIBaseInputText onChange={(e) => setValue(e.target.value)} value={value} />
	);
};

export const Primary = StorybookComponent.bind({});
