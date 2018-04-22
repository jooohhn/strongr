// @flow
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import common from './webpack.config.common.babel';

export default merge(common, {
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new UglifyJSPlugin({
      cache: true,
      parallel: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BundleAnalyzerPlugin()
  ],
  devtool: false
});
