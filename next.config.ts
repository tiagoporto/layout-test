import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  output: "export",
  basePath: process.env.CI ? "/layout-test" : "",
};

export default nextConfig;
