import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin: HtmlWebPackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
  favicon: './favicon.ico',
});

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf|png|ico)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;
