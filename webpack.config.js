const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
        generator: {
          filename: (name) => {
            const path = name.filename.split("/").slice(1, -1).join("/");
            return `${path}/[name][ext]`;
          },
        },
      },
    ],
  },
  mode: "development",
};
