import { FC, RefObject, useEffect, useState } from "react";

import clsx from "clsx";

import { blobToBase64 } from "@/shared/lib/utils";
import UI from "@/shared/UI";

import styles from "./UISnapCamera.module.scss";

interface IUISnapCameraProps {
	videoRef: RefObject<HTMLVideoElement>;
	isSnap: boolean;
	className?: string;
	getBlob?(blob: Blob): void;
	getBase64?(base64: string): void;
	getImageCapture?(imageCapture: ImageCapture): void;
}

export const UISnapCamera: FC<IUISnapCameraProps> = ({
	videoRef,
	isSnap = false,
	className,
	getBlob,
	getBase64,
	getImageCapture,
}) => {
	const [imageCapture, setImageCapture] = useState<ImageCapture>();

	useEffect(() => {
		if (isSnap && imageCapture) {
			imageCapture
				.takePhoto()
				.then(async (blob: Blob) => {
					const base64 = await blobToBase64(blob);
					getBase64?.(base64);
					getBlob?.(blob);
					getImageCapture?.(imageCapture);
				})
				.catch(function (error) {
					console.log("takePhoto() error: ", error);
				});
		}
	}, [getBase64, getBlob, getImageCapture, imageCapture, isSnap]);

	return (
		<UI.WebCamera
			className={clsx(styles.UISnapCamera, className)}
			videoRef={videoRef}
			getImageCapture={setImageCapture}
		/>
	);
};
