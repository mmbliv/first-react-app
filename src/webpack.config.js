const { createWebpackDevConfig } = require("@craco/craco");

const cracoConfig = require("./craco.config.js");
const webpackConfig = createWebpackDevConfig(cracoConfig);

module.exports = webpackConfig;
module.exports = {
  publicPath: "/first-react-app/build/",
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /\/first-react-app\/[^?]/, to: "/404.html" }],
    },
  },
};
