    //"build": "webpack",
    //"dev": "webpack serve --open",
    //"start": "nodemon server/server.js",

/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicPath: '/public',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    compress: false,
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/login': 'http://localhost:3000',
    }
  },

  // mode: 'development',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      // {
      //   test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/,
      //   use: ['@svgr/webpack'],
      // },
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // test: /\.s[ac]ss$/i,
        // test: /\.s[ac]ss$/i,
        test: /\.(s?(a|c)ss)$/i,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              postcssOptions: {
                plugins: function () {
                  // post css plugins, can be exported to postcss.config.js
                  return [require('precss'), require('autoprefixer')];
                },
              },
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
