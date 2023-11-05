import { FC, useMemo, useRef } from "react";

import clsx from "clsx";

import { MessageTest } from "@/entities/model";

import s from "./MessageText.module.scss";

const aliasRegexp = /(?:@\w{3,}\b)/g;
const aliasColor = "rgb(6 218 0)";

const AliasLink: FC<{ text: string }> = ({ text }) => (
	<a style={{ color: aliasColor }} href={"/" + text}>
		{text}
	</a>
);

interface MessageTextProps extends MessageTest {}

export const MessageText: FC<MessageTextProps> = ({ text, type }) => {
	const messageTextRef = useRef<HTMLParagraphElement>(null);

	const resultChildren = useMemo(() => {
		const result = text.split(" ").map((word, i) => {
			const sw = word.match(aliasRegexp)?.[0];

			if (sw) {
				const end = word.split(aliasRegexp)[1];
				return (
					<span key={i}>
						<AliasLink text={sw} />
						{end}{" "}
					</span>
				);
			}

			return <span key={i}>{word} </span>;
		});

		return result;
	}, [text]);

	return (
		<div className={clsx(s.MessageText, s[type])}>
			<p ref={messageTextRef} className={s.text}>
				{resultChildren}
			</p>
		</div>
	);
};
