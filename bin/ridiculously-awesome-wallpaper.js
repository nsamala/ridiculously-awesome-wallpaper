#!/usr/bin/env node
const downloader = require('../lib/downloader.js')
const argv = require('minimist')(process.argv.slice(2))
const validUrl = require('valid-url')

// check for url parameter
if (!argv.url || !validUrl.isUri(argv.url)) {
  console.error('please provide a valid --url parameter')
  console.log('usage: ridiculously-awesome-wallpaper --url https://jalopnik.com/tag/weekend-wallpaper/rss --path ./images')
  console.log('--path is optional. defaults to ./images')
  return
}

let path = argv.path || './images'

// download files
downloader.downloadFiles(argv.url, path)