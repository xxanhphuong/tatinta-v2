const withNextIntl = require("next-intl/plugin")();

const nextConfig = withNextIntl({
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./sitemap-generator");
		}
		return config;
	},
});

module.exports = nextConfig;
