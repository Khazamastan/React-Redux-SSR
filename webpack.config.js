const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ManifestPlugin = require('webpack-manifest-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');


const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, "")
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: false } },
            { loader: 'sass-loader', options: { sourceMap: false } }
        ],
    },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/css/[name].css'
    }),
    new ManifestPlugin({
      fileName: 'public/asset-manifest.json'
    }),
  ]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: false } },
            { loader: 'sass-loader', options: { sourceMap: false } }
        ],
    },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/css/[name].css'
    }),
    new ManifestPlugin({
      fileName: 'public/asset-manifest.json'
    }),
  ]
};

module.exports = [browserConfig, serverConfig];
