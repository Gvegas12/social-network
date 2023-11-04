import { StoryFn, Meta } from "@storybook/react";
import { useForm } from "react-hook-form";

import { UIInputNext } from "./UIInputNext";

export default {
	title: "shared/UI/UIInputNext",
	component: UIInputNext,
	argTypes: {},
} as Meta<typeof UIInputNext>;

const StorybookComponent: StoryFn<typeof UIInputNext> = () => {
	const { control } = useForm();

	return <UIInputNext control={control} name="first_number" />;
};

export const Primary = StorybookComponent.bind({});
