export interface Fire {
	x: number;
	y: number;
	size: number;
	fill: string;
	vx: number;
	vy: number;
	ax: number;
	delay: number;
	hold: boolean;
	alpha: number;
	far: number;
	base: {
		x: number;
		y: number;
		vx: number;
		vy: number;
	};
}

export interface Fireworks {
	x: number;
	y: number;
	size: number;
	fill: string;
	vx: number;
	vy: number;
	ay: number;
	alpha: number;
	life: number;
	base: {
		life: number;
		size: number;
	};
}

export interface Special {
	x: number;
	y: number;
	fill: string;
	direct: number;
	size: number;
	vx: number;
	vy: number;
	ax: number;
	alpha: number;
	far: number;
}

export interface Spark {
	fill: string;
	chain: number;
	rad: number;
	direct: number;
	x: number;
	y: number;
	vx: number;
	vy: number;
	alpha: number;
	ay: number;
	life: number;
	size: number;
	base: {
		velocity: number;
		life: number;
	};
}

export interface Light {
	x: number;
	y: number;
	radius: number;
	color: string;
	alpha: number;
}

export interface Text {
	alpha: number;
	fill: string;
	x: number;
	y: number;
	size: number;
}
