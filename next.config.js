/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/inojosacs.github.io",
  assetPrefix: "/inojosacs.github.io/",
}

module.exports = nextConfig

