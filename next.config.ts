import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "advanceddevelopers.com.au" }],
        destination: "https://www.advanceddevelopers.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;