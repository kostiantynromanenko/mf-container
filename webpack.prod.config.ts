import { Configuration, container as WebpackContainer } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common.config';
import { dependencies } from './package.json';

const domain = process.env.PRODUCTION_DOMAIN;

console.log('domain: ' + domain);

const config: Configuration = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  },
  plugins: [
    new WebpackContainer.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        list: `list@${domain}/list/latest/remoteEntry.js`
      },
      shared: dependencies
    })
  ]
});

export default config;
