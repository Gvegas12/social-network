import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import MicrophoneIcon from "./icons/microphone.svg";
import UploadFileIcon from "./icons/paperclip.svg";
import SendIcon from "./icons/send.svg";
// import SmilesIcon from "./icons/smiles.svg";

import s from "./ChatInputPanel.module.scss";

export const ChatInputPanel: FC = () => {
	const txRef = useRef<HTMLTextAreaElement>(null);
	const [txValue, setTxValue] = useState<string>("");

	const onChangeTX = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setTxValue(e.target.value);
	};

	// useEffect(() => {
	//   const selectionStart = txRef.current?.selectionStart;
	//   if (selectedEmoji !== "" || selectionStart) {
	//     setTxValue((prevState) => {
	//       const start = prevState.slice(0, selectionStart);
	//       const end = prevState.slice(selectionStart);
	//       return start + selectedEmoji + end;
	//     });
	//     setSelectedEmoji("");
	//   }
	// }, [selectedEmoji]);

	useEffect(() => {
		if (txRef.current) {
			// Сбросить высоту - важно уменьшить при удалении
			txRef.current.style.height = "inherit";
			// Установить высоту
			txRef.current.style.height = `${txRef.current.scrollHeight}px`;
		}
	}, [txValue]);

	return (
		<div className={s.ChatInputPanel}>
			<UploadFileIcon className={s.icon} />
			<textarea
				className={s.textarea}
				ref={txRef}
				onChange={onChangeTX}
				value={txValue}
				// onKeyDown={(e): void => {
				// 	if (e.key === "Enter") {
				// 		setTxValue((prevState) => {
				// 			const start = prevState.slice(0, txValue.length);
				// 			const end = prevState.slice(txValue.length);
				// 			return `${start}${end}`;
				// 		});
				// 	}
				// }}
			/>
			{/* <SmilesIcon /> */}
			<MicrophoneIcon className={s.icon} />
			<SendIcon className={s.icon} />
		</div>
	);
};
