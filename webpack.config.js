const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const commonConfig = {
  entry: {
    main: path.resolve(__dirname, './src/client/index.js')
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath:'/',
    chunkFilename: 'js/[name].js',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // query: {
        //   plugins: ['recharts'],
        // }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
}

const devConfig = {
  performance: {
    maxAssetSize: 500000,
    maxEntrypointSize: 500000
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    compress: false,
    host: 'localhost',
    hot: true,
    liveReload: true,
    port: 8080,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css'
    })
  ]
}

const productConfig = {
  mode: 'production',
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    })
  ]
}

module.exports = function (env, args) {
  console.log('env:', env)
  console.log('args:', args)
  if (args.mode === 'development') {
    return merge(commonConfig, devConfig)
  } else return merge(commonConfig, productConfig)
}