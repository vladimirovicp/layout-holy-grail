const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const isDevelopment = mode === 'development';
  const devtool = isDevelopment ? 'source-map' : undefined;
  return {
    mode,
    devtool,
    entry: './src/index.js',
    module: {
      rules: [
        {
            test: /\.html$/,
            loader: 'html-loader',
        },
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true,
            },
        },
        {
          test: /\.(jpg|png|svg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/front.pug'),
        favicon: path.resolve(__dirname, 'src/assets/img/favicon.ico'),
        filename: 'index.html',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/front.pug'),
        favicon: path.resolve(__dirname, 'src/assets/img/favicon.ico'),
        filename: 'home/index.html',
      }),
      
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/login.pug'),
        favicon: path.resolve(__dirname, 'src/assets/img/favicon.ico'),
        filename: 'login/index.html',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/login-error.pug'),
        favicon: path.resolve(__dirname, 'src/assets/img/favicon.ico'),
        filename: 'login-error/index.html',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/register.pug'),
        favicon: path.resolve(__dirname, 'src/assets/img/favicon.ico'),
        filename: 'register/index.html',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/register-error.pug'),
        favicon: path.resolve(__dirname, 'src/assets/img/favicon.ico'),
        filename: 'register-error/index.html',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/not-found.pug'),
        favicon: path.resolve(__dirname, 'src/assets/img/favicon.ico'),
        filename: 'not-found/index.html',
      }),

      

      
      new FileManagerPlugin({
        events: {
            onStart: {
                delete: ['dist'],
            },
            onEnd: {
                copy: [
                    {
                        source: path.join(__dirname, 'src/assets/img/svg'),
                        destination: path.join(__dirname, 'dist/assets/img/svg'),
                    },
                ],
            },
        },
      }),
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      //assetModuleFilename: 'assets/[hash][ext]',
      assetModuleFilename: 'assets/[name][ext]',
    },
    devServer: {
      static: path.join(__dirname, 'src'),
      compress: true,
      port: 9000,
      open: true,
    },
  };
};