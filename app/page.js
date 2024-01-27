"use client";
import { useEffect, useRef } from "react";

export default function Home() {
	const canvasRef = useRef(null);
	useEffect(() => {
		/** @type {HTMLCanvasElement} */
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);

		const resizeHandle = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			context.fillRect(0, 0, canvas.width, canvas.height);
		};
		window.addEventListener("resize", resizeHandle);

		return () => {
			window.removeEventListener("resize", resizeHandle);
		};
	}, []);

	return <canvas ref={canvasRef} />;
}
