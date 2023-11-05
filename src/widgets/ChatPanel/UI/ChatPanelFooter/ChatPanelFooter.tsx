import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import MicrophoneIcon from "./icons/microphone.svg";
import UploadFileIcon from "./icons/paperclip.svg";
import SendIcon from "./icons/send.svg";
// import SmilesIcon from "./icons/smiles.svg";

import s from "./ChatPanelFooter.module.scss";

interface ChatPanelFooterProps {
	socket: WebSocket;
}

export const ChatPanelFooter: FC<ChatPanelFooterProps> = ({ socket }) => {
	const txRef = useRef<HTMLTextAreaElement>(null);
	const [txValue, setTxValue] = useState<string>("");

	const onChangeTX = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setTxValue(e.target.value);
	};

	const onSubmitMessage = () => {
		socket.send(txValue);
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
		<div className={s.ChatPanelFooter}>
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
				<SendIcon onClick={onSubmitMessage} className={s.icon} />
			</div>
		</div>
	);
};
