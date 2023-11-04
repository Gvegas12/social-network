import { FC, useEffect, RefObject, memo } from "react";

interface IWebcamVideoProps {
	videoRef: RefObject<HTMLVideoElement>;
	className?: string;
	whenOnPlay?: () => void;
	getImageCapture?(imageCapture: ImageCapture): void;
}

export const UIWebCamera: FC<IWebcamVideoProps> = memo(
	({ whenOnPlay, getImageCapture, videoRef, className }) => {
		useEffect(() => {
			const video = videoRef.current;
			if (!video) return;

			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then((stream) => {
					const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
					getImageCapture?.(imageCapture);

					video.srcObject = stream;
					video.onloadedmetadata = () => {
						video.play();
						whenOnPlay?.();
					};
				})
				.catch((error) => {
					console.log("getUserMedia error: ", error);
				});
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		return (
			<video
				autoPlay
				playsInline
				ref={videoRef}
				className={className}
				data-testid="UIWebCamera"
			/>
		);
	},
);

UIWebCamera.displayName = "UIWebCamera";
