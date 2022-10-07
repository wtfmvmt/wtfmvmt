/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['scontent-akl1-1.cdninstagram.com', 'https://s3.us-west-2.amazonaws.com'],
  },
  generateBuildId: async () => {
		const id = fs.readFileSync(process.cwd() + "/BUILD_ID", "utf8");
		return id;
	}
}

module.exports = nextConfig
