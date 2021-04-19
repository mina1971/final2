const { write } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: "./src/js/index.js",
  output: {
    publicPath:'/',
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js",
   },
   module: {
    rules: [

      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath:'../'
            }
          },
          "css-loader",
          "sass-loader",
          ],
          },
          {
            test: /\.(gif|png|jpe?g)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images',
                }
              }
            ]
          },
          {
            test: /\.(svg|eot|woff2|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts',
                }
              }
            ]
          },
          
          {
            test:/\.html$/i,
            loader:'html-loader',
          },
          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },

          {
            test: /\.(mov|mp4)$/,
            use: [
              'file-loader'
            ]
          }
        ],
      },

    devServer: {
     contentBase: path.join(__dirname, 'build'),
    //compress: true,
    port: 9000,
    writeToDisk:true,
    stats:'errors-only',
    open: true
    },

   plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    
    new HtmlWebpackPlugin({
      template: "./src/book1.html",
      filename: "book1.html",
    }),
    
    new HtmlWebpackPlugin({
      template: "./src/book2.html",
      filename: "book2.html",
    }),
    
    new MiniCssExtractPlugin(),
   ],
   };