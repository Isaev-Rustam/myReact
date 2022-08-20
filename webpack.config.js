const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

  devServer: {
    open: true,
    hot: true,
    port: 8000,
    static: {
      directory: './src',
      watch: true
    }
  },

  devtool: 'source-map',

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },


  entry: {
    // main:["@babel/polyfill", "./src/js/index.js"],
    main: ["./src/js/index.js"],
    // types:"./src/js/index.ts",
    react: "./src/js/index.jsx"
  },

  output: {
    filename: '[name].[contenthash].js',
    // assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      // js
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions()
        }
      },

      //jsx
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react")
        }
      },

      // изображения
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      // изображения из html
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // шрифты
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },


    ],
  },

  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: "./src/favicon/favicon.ico"
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
  ],

};

function babelOptions(preset = "") {
  const obj = {
    presets: ['@babel/preset-env']
  }
  if (preset) {
    obj.presets.push(preset)
  }
  return obj
}