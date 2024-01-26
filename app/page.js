"use client";
import { useEffect, useRef } from "react";

export default function Home() {
	const ref = useRef(null);
	useEffect(() => {
		/** @type {HTMLCanvasElement} */
		const canvas = ref.current;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		/** @type {CanvasRenderingContext2D} */
		const ctx = canvas.getContext("2d");
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}, []);

	return <canvas ref={ref} />;
}
