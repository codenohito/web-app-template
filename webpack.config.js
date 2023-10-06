const path = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const common = {
  entry: './src/index.js',
  output: {
    filename: (devMode ? "bundle.js" : "bundle.[contenthash].js"),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
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
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new MiniCssExtractPlugin({
      filename: (devMode ? "[name].css" : "[name].[contenthash].css"),
    })
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

module.exports = devMode
  ? merge(common, {
     mode: 'development',
     output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devtool: 'eval',
  })
  : merge(common, {
    mode: 'production',
    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    }
  });
