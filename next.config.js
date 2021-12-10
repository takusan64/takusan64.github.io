/** @type {import('next').NextConfig} */

const path = require('path')

require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      api: path.resolve(__dirname, 'src/api'),
      lib: path.resolve(__dirname, 'src/lib'),
      components: path.resolve(__dirname, 'src/components'),
      type: path.resolve(__dirname, 'src/type'),
    }
    return config
  }
}
