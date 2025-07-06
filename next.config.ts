import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_MY_ENV_VAR: process.env.NEXT_PUBLIC_MY_ENV_VAR,
    SERVER_ENV_VAR: process.env.SERVER_ENV_VAR,
  },
};

export default nextConfig;
