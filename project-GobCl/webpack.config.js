const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/app.js',
  output: {
    //filename: 'bundle.js',
    //filename: 'new-ic[name].[contenthash].js',
    filename: 'gob.cl.js'
  },
  watch:true,
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
    },{
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
      }]
  }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
    new MiniCssExtractPlugin({
      //filename: "[name].css",
      filename: "gobCL.css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin([
      {from:'src/scss/fonts',to:'fonts'},
      {from:'src/scss/images',to:'images'}
  ]), 
      require('autoprefixer')
  ]
};