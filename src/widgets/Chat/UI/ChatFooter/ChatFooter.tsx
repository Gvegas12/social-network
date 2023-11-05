import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import MicrophoneIcon from "./icons/microphone.svg";
import UploadFileIcon from "./icons/paperclip.svg";
import SendIcon from "./icons/send.svg";
// import SmilesIcon from "./icons/smiles.svg";

import s from "./ChatFooter.module.scss";

interface ChatFooterProps {
	onSubmit(message: string): void;
}

export const ChatFooter: FC<ChatFooterProps> = ({ onSubmit }) => {
	const txRef = useRef<HTMLTextAreaElement>(null);
	const [txValue, setTxValue] = useState<string>("");

	useEffect(() => {
		if (txRef.current) {
			// Сбросить высоту - важно уменьшить при удалении
			txRef.current.style.height = "inherit";
			// Установить высоту
			txRef.current.style.height = `${txRef.current.scrollHeight}px`;
		}
	}, [txValue]);

	const onChangeTX = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setTxValue(e.target.value);
	};

	const onSubmitHandler = () => {
		onSubmit(txValue);
		setTxValue("");
	};

	return (
		<div className={s.ChatFooter}>
			<div className={s.txWrapper}>
				<UploadFileIcon className={s.icon} />
				<textarea
					className={s.textarea}
					ref={txRef}
					onChange={onChangeTX}
					value={txValue}
				/>
				{/* <SmilesIcon /> */}
				<MicrophoneIcon className={s.icon} />
				<SendIcon onClick={onSubmitHandler} className={s.icon} />
			</div>
		</div>
	);
};

/* 

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

*/
