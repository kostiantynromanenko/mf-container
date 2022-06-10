import path from 'path';
import { Configuration as WebpackConfiguration, container as WebpackContainer } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import commonConfig from './webpack.common.config';

import { merge } from 'webpack-merge';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = merge(commonConfig, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new WebpackContainer.ModuleFederationPlugin({
      name: 'listApp',
      filename: 'remoteEntry.js',
      exposes: {
        './List': './src/boostrap'
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 4001,
    hot: true
  },
  devtool: 'inline-source-map'
});

export default config;

// const config: Configuration = {
//   entry: './src/index'
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html'
//     }),
//     new WebpackContainer.ModuleFederationPlugin({
//       name: 'listApp',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './List': './src/list/List'
//       },
//       shared: {
//         react: {
//           singleton: true
//         }
//       }
//       // shared: {
//       //   react: { singleton: true, eager: true, requiredVersion: dependencies.react },
//       //   'react-dom': {
//       //     singleton: true,
//       //     eager: true,
//       //     requiredVersion: dependencies['react-dom']
//       //   }
//       // }
//     })
//   ],
// };
