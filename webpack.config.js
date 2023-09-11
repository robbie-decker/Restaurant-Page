const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/imgs/favicon.svg',
      template: './src/index.html',
      filename: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
          test: /\.(jpg|png|svg|gif|webp)$/,
          type: 'asset/resource',
        // test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        // use: [
        //   {
        //     loader: 'file-loader', // or 'url-loader'
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'images/',
        //     },
        //   },
        // ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};