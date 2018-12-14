module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      // {
      //   test: /\.(jpe?g|gif|png|otf|ttf)$/,
      //   use: [
      //     { loader: 'file-loader' }
      //   ]
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     'url-loader?limit=10000',
      //     'img-loader'
      //   ]
      // }
    ]
  }
}