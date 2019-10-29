const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use :{
          loader: 'url-loader',
          options: {
            // placeholders  占位符
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 20480
          }
        }
      },
      {
        test: /\.css$/,
        use :['style-loader', 'css-loader']
      }
    ]

  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
