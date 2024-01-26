"use client";
import { useEffect, useRef } from "react";

export default function App() {
	const canvasRef = useRef(null);
	useEffect(() => {
		// TODO: draw canvas here
	}, []);
	return <canvas ref={canvasRef} />;
}
