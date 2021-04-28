const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', './dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(styl|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
          'postcss-loader',
          'stylus-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'ReScript-React Template',
      favicon: path.resolve(__dirname, '..', './src/assets/brand/favicon.ico'),
      template: path.resolve(__dirname, '..', './src/index.html'),
      hash: true,
      scriptLoading: 'defer',
      inject: 'head', // head better for extension
      excludeChunks: ['manifest', 'background'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', './src/assets/normalize.css'),
          to: path.resolve(__dirname, '..', './dist/normalize.css'),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
};
