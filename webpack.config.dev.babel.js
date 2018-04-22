// @flow
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.common.babel';

export default merge(common, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'source-map'
});
