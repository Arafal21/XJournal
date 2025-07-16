/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    devIndicators: false,
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src', 'styles')],
	},
	experimental: {
		reactCompiler: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000', // On development
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'example.com', // Real domain
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
