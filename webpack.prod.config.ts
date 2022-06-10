import { Configuration, container as WebpackContainer } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common.config';
import { dependencies } from './package.json';

const domain = process.env.PRODUCTION_DOMAIN;

const config: Configuration = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new WebpackContainer.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        list: `list@${domain}/list/remoteEntry.js`
      },
      shared: dependencies
    })
  ]
});

export default config;