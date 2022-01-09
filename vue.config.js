module.exports = {
  lintOnSave: false,
  assetsDir: 'static',
  outputDir: './mindularportal/ui',
  devServer: {
    proxy: {
      '/api*': {
        // Forward frontend dev server request for /api to django dev server
        target: 'http://localhost:8000/',
      }
    }
  }
}
