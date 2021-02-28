const withWorkers = require("@zeit/next-workers");
module.exports = withWorkers({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.worker\.js/,
      use: {
        loader: "worker-loader",
        options: {
          name: "static/[hash].worker.js",
          publicPath: "/_next/",
        },
      },
    });

    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;

    return config;
  },
});
