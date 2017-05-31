var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        loader: "babel-loader",
        // Skip any files outside of project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      }
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  entry: [
    './src/index.js'
  ]
};
