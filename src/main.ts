import "./style.css";
import type { Text, Fire, Fireworks, Light, Spark, Special } from "../types";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
if (!ctx) {
	throw new Error("Error occurred");
}

const listFire: Fire[] = [];
const listFirework: Fireworks[] = [];
const listSpecial: Special[] = [];
const listText: Text[] = [];
const listSpark: Spark[] = [];
const lights: Light[] = [];
const fireNumber = 10;
const center = { x: canvas.width / 2, y: canvas.height / 2 };
const range = 100;
let fired = 0;
let onHold = 0;
let supprise = false;
let fire: Fire;

for (let i = 0; i < fireNumber; i++) {
	fire = {
		x: (Math.random() * range) / 2 - range / 4 + center.x,
		y: Math.random() * range * 2.5 + canvas.height,
		size: Math.random() + 0.5,
		fill: "#ff3",
		vx: Math.random() - 0.5,
		vy: -(Math.random() + 4),
		ax: Math.random() * 0.06 - 0.03,
		delay: 100,
		hold: false,
		alpha: 1,
		far: Math.random() * range + (center.y - range),
		base: { x: 0, y: 0, vx: 0, vy: 0 },
	};
	fire.base = {
		x: fire.x,
		y: fire.y,
		vx: fire.vx,
		vy: fire.vy,
	};
	listFire.push(fire);
}

function initSpark() {
	const x = Math.random() * range * 3 - range * 1.5 + center.x;
	const vx = Math.random() - 0.5;
	const vy = -(Math.random() + 4);
	const ax = Math.random() * 0.04 - 0.02;
	const far = Math.random() * range * 4 - range + center.y;
	const direct = ax * 10 * Math.PI;
	const max = fireNumber * 0.5;
	for (let i = 0; i < max; i++) {
		const special: Special = {
			x: x,
			y: Math.random() * range * 0.25 + canvas.height,
			size: Math.random() + 2,
			fill: "#ff3",
			vx: vx,
			vy: vy,
			ax: ax,
			direct: direct,
			alpha: 1,
			far: 0,
		};
		special.far = far - (special.y - canvas.height);
		listSpecial.push(special);
	}
}

function randColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const color = `rgb(${r},${b},${g})`;
	return color;
}

function pushFirework(fire: Fire) {
	const color = randColor();
	const velocity = Math.random() * 8 + 8;
	let max = fireNumber * 3;
	for (let i = 0; i < max; i++) {
		const rad = (i * Math.PI * 2) / max;
		const firework = {
			x: fire.x,
			y: fire.y,
			size: Math.random() + 1.5,
			fill: color,
			vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
			vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
			ay: 0.06,
			alpha: 1,
			life: Math.round((Math.random() * range) / 2) + range / 1.5,
			base: { life: 0, size: 0 },
		};
		firework.base = {
			life: firework.life,
			size: firework.size,
		};
		listFirework.push(firework);
	}

	max = fireNumber * Math.round(Math.random() * 4 + 4);

	for (let i = 0; i < max; i++) {
		const rad = (i * Math.PI * 2) / max;
		const firework: Fireworks = {
			x: fire.x,
			y: fire.y,
			size: Math.random() + 1.5,
			fill: color,
			vx: Math.cos(rad) * velocity * Math.random(),
			vy: Math.sin(rad) * velocity * Math.random(),
			ay: 0.06,
			alpha: 1,
			life: Math.round((Math.random() * range) / 2) + range / 1.5,
			base: { life: 0, size: 0 },
		};
		firework.base = {
			life: firework.life,
			size: firework.size,
		};
		listFirework.push(firework);
	}
	return color;
}

function makeSpark(special: Special) {
	const color = special.fill;
	const velocity = Math.random() * 6 + 12;
	const max = fireNumber;
	for (let i = 0; i < max; i++) {
		const rad =
			Math.random() * Math.PI * 0.3 + Math.PI * 0.35 + Math.PI + special.direct;
		const spark = {
			x: special.x,
			y: special.y,
			size: Math.random() + 1,
			fill: color,
			vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
			vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
			ay: 0.02,
			alpha: 1,
			rad: rad,
			direct: special.direct,
			chain: Math.round(Math.random() * 2) + 2,
			life: Math.round((Math.random() * range) / 2) + range / 2,
			base: { life: 0, velocity: 0 },
		};
		spark.base = {
			life: spark.life,
			velocity: velocity,
		};
		listSpark.push(spark);
	}
	return color;
}

function chainSpark(parentSpark: Spark) {
	const color = parentSpark.fill;
	if (parentSpark.chain > 0) {
		const velocity = parentSpark.base.velocity * 0.6;
		const max = Math.round(Math.random() * 5);
		for (let i = 0; i < max; i++) {
			const rad =
				Math.random() * Math.PI * 0.3 -
				Math.PI * 0.15 +
				parentSpark.rad +
				parentSpark.direct;
			const spark = {
				x: parentSpark.x,
				y: parentSpark.y,
				size: parentSpark.size * 0.6,
				fill: color,
				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
				ay: 0.02,
				alpha: 1,
				rad: rad,
				direct: parentSpark.direct,
				chain: parentSpark.chain,
				life: parentSpark.base.life * 0.8,
				base: { life: 0, size: 0, velocity: 0 },
			};
			spark.base = {
				life: spark.life,
				size: spark.size,
				velocity: velocity,
			};
			listSpark.push(spark);
		}
	}
	return color;
}

window.onload = function loop() {
	requestAnimationFrame(loop);
	update();
	draw(ctx);
};

function update() {
	for (let i = 0; i < listFire.length; i++) {
		const fire = listFire[i];
		if (fire.y <= fire.far) {
			fired++;
			const color = pushFirework(fire);
			lights.push({
				x: fire.x,
				y: fire.y,
				color: color,
				radius: range * 2,
				alpha: 0,
			});
			fire.y = fire.base.y;
			fire.x = fire.base.x;
			if (fired % 33 === 0) {
				initSpark();
			}
			supprise = fired % 100 === 0 ? true : supprise;
			if (supprise) {
				fire.vx = 0;
				fire.vy = 0;
				fire.ax = 0;
				fire.hold = true;
				onHold++;
			} else {
				fire.vx = fire.base.vx;
				fire.vy = fire.base.vy;
				fire.ax = Math.random() * 0.06 - 0.03;
			}
		}
		if (fire.hold && fire.delay <= 0) {
			onHold--;
			fire.hold = false;
			fire.delay = Math.round(Math.random() * range) + range * 4;
			fire.vx = fire.base.vx;
			fire.vy = fire.base.vy;
			fire.ax = Math.random() * 0.06 - 0.03;
			fire.alpha = 1;
		} else if (fire.hold && fire.delay > 0) {
			fire.delay--;
		} else {
			fire.x += fire.vx;
			fire.y += fire.vy;
			fire.vx += fire.ax;
			fire.alpha = (fire.y - fire.far) / fire.far;
		}
	}

	for (let i = listFirework.length - 1; i >= 0; i--) {
		const firework = listFirework[i];
		if (firework) {
			firework.vx *= 0.9;
			firework.vy *= 0.9;
			firework.x += firework.vx;
			firework.y += firework.vy;
			firework.vy += firework.ay;
			firework.alpha = firework.life / firework.base.life;
			firework.size = firework.alpha * firework.base.size;
			firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
			firework.life--;
			if (firework.life <= 0) {
				listFirework.splice(i, 1);
			}
		}
	}

	for (let i = listSpecial.length - 1; i >= 0; i--) {
		const special = listSpecial[i];
		if (special.y <= special.far) {
			lights.push({
				x: special.x,
				y: special.y,
				color: special.fill,
				alpha: 0.02,
				radius: range * 2,
			});
			makeSpark(special);
			listSpecial.splice(i, 1);
		} else {
			special.x += special.vx;
			special.y += special.vy;
			special.vx += special.ax;
			special.alpha = (special.y - special.far) / special.far;
		}
	}

	for (let i = listSpark.length - 1; i >= 0; i--) {
		const spark = listSpark[i];
		if (spark) {
			spark.vx *= 0.9;
			spark.vy *= 0.9;
			spark.x += spark.vx;
			spark.y += spark.vy;
			spark.vy += spark.ay;
			spark.alpha = spark.life / spark.base.life + 0.2;
			spark.life--;
			if (spark.life < spark.base.life * 0.8 && spark.life > 0) {
				spark.chain--;
				chainSpark(spark);
			}
			if (spark.life <= 0) {
				listSpark.splice(i, 1);
			}
		}
	}
}

function draw(ctx: CanvasRenderingContext2D) {
	ctx.globalAlpha = 0.2;
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < listFire.length; i++) {
		const fire = listFire[i];
		ctx.globalAlpha = fire.alpha;
		ctx.beginPath();
		ctx.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fillStyle = fire.fill;
		ctx.fill();
	}

	for (let i = 0; i < listFirework.length; i++) {
		const firework = listFirework[i];
		ctx.globalAlpha = firework.alpha;
		ctx.beginPath();
		ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fillStyle = firework.fill;
		ctx.fill();
	}

	for (let i = 0; i < listSpecial.length; i++) {
		const special = listSpecial[i];
		ctx.globalAlpha = special.alpha;
		ctx.beginPath();
		ctx.arc(special.x, special.y, special.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();
		ctx.fillStyle = special.fill;
		ctx.fillRect(
			special.x - special.size,
			special.y - special.size,
			special.size * 2,
			special.size * 2,
		);
	}

	for (let i = 0; i < listSpark.length; i++) {
		const spark = listSpark[i];
		ctx.globalAlpha = spark.alpha;
		ctx.beginPath();
		ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();
		ctx.fillStyle = spark.fill;
		ctx.fillRect(
			spark.x - spark.size,
			spark.y - spark.size,
			spark.size * 2,
			spark.size * 2,
		);
	}

	while (lights.length) {
		const light = lights.pop();
		if (light === undefined) {
			throw "Error occurred";
		}
		const gradient = ctx.createRadialGradient(
			light.x,
			light.y,
			0,
			light.x,
			light.y,
			light.radius,
		);
		gradient.addColorStop(0, "white");
		gradient.addColorStop(0.2, light.color);
		gradient.addColorStop(0.8, "rgba(0, 0, 0, 0)");
		gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
		ctx.globalAlpha = light.alpha ? light.alpha : 0.25;
		ctx.fillStyle = gradient;
		ctx.fillRect(
			light.x - light.radius,
			light.y - light.radius,
			light.radius * 2,
			light.radius * 2,
		);
	}

	for (let i = 0; i < listText.length; i++) {
		const text = listText[i];
		ctx.globalAlpha = text.alpha;
		ctx.fillStyle = text.fill;
		ctx.fillRect(
			text.x - text.size,
			text.y - text.size,
			text.size * 2,
			text.size * 2,
		);
	}
}
