const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = () => {
  const plugins = [withBundleAnalyzer];
  return plugins.reduce((acc, next) => next(acc));
};