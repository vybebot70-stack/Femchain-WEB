/** @type {import('next').NextConfig} */
const replitDevDomain = process.env.REPLIT_DEV_DOMAIN?.trim();

const nextConfig = {
  output: "export",
  trailingSlash: true,
  devIndicators: false,
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    ...(replitDevDomain ? [replitDevDomain] : []),
  ],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
