import type { NextConfig } from "next";

const lanDevOrigins =
  process.env.NODE_ENV === "development"
    ? [
        "192.168.*.*",
        "10.*.*.*",
        "127.0.0.1",
        ...String(process.env.NEXT_DEV_EXTRA_ORIGINS ?? "")
          .split(",")
          .map((h) => h.trim())
          .filter(Boolean),
      ]
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  ...(lanDevOrigins ? { allowedDevOrigins: lanDevOrigins } : {}),
};

export default nextConfig;
