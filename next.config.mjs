/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "aurorainsights.com",
          },
        ],
        destination: "https://www.aurorainsights.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "aurorainsights.com",
          },
        ],
        destination: "https://www.aurorainsights.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
