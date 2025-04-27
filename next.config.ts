// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.ashyo.fullstackdev.uz"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
