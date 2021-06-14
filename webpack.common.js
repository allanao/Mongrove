const path = require('path');

// RENDER PROCESS
module.exports = {
  mode: 'development',
  entry: './client/App.jsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: { 
    rules: [
      {
        test: /\.js(x?)$/,
        include: /client/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets:{
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compile Sass to CSS
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './client/index.html'
  //   })
  // ]
};