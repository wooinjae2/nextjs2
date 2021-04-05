module.exports = {
  async rewrites() {
    return [
      {
        source: '/:api*',
        destination: 'http://localhost:8080/:api*',
      },
    ]
  },
}