const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "main.js"
  },
  resolve: {
    extensions: ['.jsx','.js'],
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ,
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"]
    },
    ],
  },

  devServer: {
    'static': {
      directory: path.join(__dirname, 'build'),
    }
  },
  optimization: {
    minimize: true,
  },
  };