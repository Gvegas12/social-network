import { FC } from "react";

import { Control, Controller } from "react-hook-form";

import { IUIBaseInputTextProps, UIBaseInputText } from "../../UIBaseInputText";

export interface IUIInputTextProps
	extends Omit<IUIBaseInputTextProps, "name" | "onBlur"> {
	control: Control<any>;
	name: string;
}

export const UIInputText: FC<IUIInputTextProps> = ({
	control,
	name,
	onChange,
	...props
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<UIBaseInputText
					{...props}
					{...field}
					onChange={(e) => {
						onChange?.(e);
						field.onChange(e);
					}}
				/>
			)}
		/>
	);
};
