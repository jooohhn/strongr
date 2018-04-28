// @flow
import webpack from 'webpack';
import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import prod from './webpack.config.prod.babel';

export default merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('analyze')
    })
  ],
  devtool: 'source-map'
});
