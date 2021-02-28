module.exports = {
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

    config.output.globalObject = 'typeof self !== "object" ? self : this';

    return config;
  },
};
