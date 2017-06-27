// @flow
import path from 'path';
import webpack from 'webpack';
import { WDS_PORT } from './src/shared/config';
import { isProd } from './src/shared/util';

export default {
  entry: [
    // Starting point of app
    'react-hot-loader/patch',
    './src/client'
  ],
  output: {
    filename: 'js/bundle.js', // name of the bundle to generate
    path: path.resolve(__dirname, 'dist'), // Destination folder
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/` // URL
  },
  module: {
    rules: [
      // Tells all .js and .jsx files to go through babel-loader.
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    // port for dev server
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};
