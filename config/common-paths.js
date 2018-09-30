const {resolve} = require('path');

module.exports = {
  contextPath: resolve('src'),
  outputPath: resolve(__dirname, '../', 'dist'),
  utilsPath: resolve(__dirname, '../', 'src/utils/index')
}
