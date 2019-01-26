const path = require('path');


module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  // provide WaveSurfer as a globally accessible variable
  plugins: [
      new webpack.ProvidePlugin({
        WaveSurfer: 'wavesurfer.js'
      })
    ],
    // Alias `wavesurfer` to the correct wavesurfer package.
    // (wavesurfer.js has some non-standard naming convention)
    resolve: {
      alias: {
        wavesurfer: require.resolve('wavesurfer.js')
      }
    },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};