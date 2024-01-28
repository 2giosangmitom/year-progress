/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	experimental: {
		forceSwcTransforms: true,
	},
};

export default nextConfig;
