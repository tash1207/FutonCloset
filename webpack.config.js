const webpack = require('webpack')
const path = require('path')
const resolve = path.resolve
const join = path.join

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// Directories
const root    = resolve(join(__dirname))
const src     = join(root, 'src')
const htdocs  = join(root, 'htdocs')
const modules = join(root, 'node_modules')
const dest    = join(root, 'dist')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: {
    app: join(src, 'index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path:  dest,
  },
  devtool: isDev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(htdocs, 'index.html')
    }),
    new CopyWebpackPlugin([{
        from: resolve(root, "images"),
        to: path.join(dest, "images")
    }])
  ],
}

module.exports = config;
