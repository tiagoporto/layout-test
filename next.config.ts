import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: process.env.CI ? "/layout-test" : "",
};

export default nextConfig;
