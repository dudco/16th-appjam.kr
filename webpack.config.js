const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  target: 'web',
  entry: './src/index.ts',
  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  node: {
    __dirname: true,
    __filename: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
        loader: 'file-loader',
        options: { name: 'assets/[name].[hash].[ext]' }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          cssModules: {
            localIdentName: '[hash:base64:5]',
            camelCase: false
          },
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.css$/,
        use: [
          // process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader'
          MiniCSSExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: "sass-loader",
            options: {}
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    overlay: true,
    stats: "errors-only",
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new MiniCSSExtractPlugin({
      filename: '16th-appzam--[hash].css',
      chunkFilename: '16th-appzam--[hash].css',
    }),
    new VueLoaderPlugin()
  ]
}