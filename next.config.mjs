/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "sophiagrouph.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
