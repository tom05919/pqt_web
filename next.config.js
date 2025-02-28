/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value:
                "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
            },
          ],
        },
      ];
    },
    reactStrictMode: true,
    swcMinify: true,
  };
  
  module.exports = nextConfig;
  