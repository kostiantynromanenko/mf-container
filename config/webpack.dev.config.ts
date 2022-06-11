import { Configuration as WebpackConfiguration, container as WebpackContainer } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.common.config';
import { dependencies } from '../package.json';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = merge(commonConfig, {
  mode: 'development',
  plugins: [
    new WebpackContainer.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        list: 'list@http://localhost:4001/remoteEntry.js'
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react']
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom']
        }
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 4000,
    hot: true
  },
  devtool: 'inline-source-map'
});

export default config;
