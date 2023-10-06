const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            gitignore: true,
            ignore: ['**/index.html']
          }
        },
      ],
    }),
    new HtmlWebpackPlugin({ template: 'public/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')],
              },
            },
          },
        ],
      },
    ],
  },
};
