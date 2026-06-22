/** @type {import('next').NextConfig} */

// For a GitHub *user* site (Irtiza333.github.io) the site is served from the
// domain root, so BASE_PATH stays empty. For a *project* repo (e.g.
// github.com/Irtiza333/my-site served at /my-site), set BASE_PATH="/my-site"
// in the environment (the deploy workflow does this automatically).
const basePath = process.env.BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
