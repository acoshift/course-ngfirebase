const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'source-map',
  debug: true,
  devServer: {
    historyApiFallback: true,
    inline: true
  },
  entry: {
    'main': './main.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.[hash].js',
    chunkFilename: '[hash].[id].chunk.js'
  },
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', 'bower_components']
  },
  module: {
    // preLoaders: [
    //   { test: /\.js$/, loader: 'source-map' },
    //   { test: /\.js$/, loader: 'standard', exclude: /(web_modules|node_modules|bower_components)/ }
    // ],
    loaders: [
      { test: /\.js$/, exclude: /(web_modules|node_modules|bower_components)/, loader: 'babel?presets[]=es2015&presets[]=stage-0' },
      // { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file?name=assets/images/[hash].[ext]' },
      // { test: /\.(ttf|eot)(\?[a-z0-9\.=]+)?$/, loader: 'file?name=assets/fonts/[hash].[ext]' },
      { test: /\.html?$/, loader: 'html' },
      // { test: /\.html?$/, loader: 'html?minimize=true&attrs[]=img:src&attrs[]=img:fallback-src' },
      // { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      // { test: /\.css$/, loaders: ['style', 'css'] },
      // { test: /\.woff$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=assets/fonts/[hash].[ext]' },
      // { test: /\.woff2$/, loader: 'url?limit=10000&mimetype=application/font-woff2&name=assets/fonts/[hash].[ext]' }
    ]
  },
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: { keep_fnames: true }, sourcemap: false, compress: { warnings: false } }),
    // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.[hash].js', minChunks: Infinity }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    })
  ]
}
