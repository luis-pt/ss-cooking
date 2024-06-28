const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    hot: true,
    open: true,
    watchFiles: ['src/**/*.html', 'src/scss/**/*.scss', 'src/js/**/*.js', 'src/images/**/*'],
  },
});
