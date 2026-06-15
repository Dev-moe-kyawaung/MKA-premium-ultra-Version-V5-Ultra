const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "" : "",
  assetPrefix: isProd ? "" : "",
};
