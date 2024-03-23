import { BreezifyWebpack5Plugin } from "breezify"

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (config.mode === "production") {
      config.plugins.push(new BreezifyWebpack5Plugin());
    }

    return config;
  }
};

export default nextConfig;
