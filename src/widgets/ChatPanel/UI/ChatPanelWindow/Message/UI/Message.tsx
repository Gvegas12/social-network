import { FC, useMemo, useRef } from "react";

import clsx from "clsx";

import { MessageTest } from "@/entities/model";

import s from "./Message.module.scss";

const aliasRegexp = /(?:@\w{3,}\b)/g;

/* 
	Привет, @alias, это User @lasvegas-asdasd TEST
*/

const AliasLink: FC<{ text: string }> = ({ text }) => (
	<a style={{ color: "#f7f70b" }} href={"/" + text}>
		{text}
	</a>
);

interface MessageProps extends MessageTest {}

export const Message: FC<MessageProps> = ({ text, type }) => {
	const messageRef = useRef<HTMLParagraphElement>(null);

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
		<div className={clsx(s.message, s[type])}>
			<p ref={messageRef} className={s.messageText}>
				{resultChildren}
			</p>
		</div>
	);
};
