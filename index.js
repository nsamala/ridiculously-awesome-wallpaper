const argv = require('minimist')(process.argv.slice(2))
const Parser = require('rss-parser')
const cheerio = require('cheerio')
const download = require('image-downloader')

const parser = new Parser()

async function downloadFiles(url) {
  try {
    let feed = await parser.parseURL(url)

    feed.items.forEach(async item => {
      let $ = cheerio.load(item.content)
      let image = $('img').attr('src')
      let split = image.split('/')
      let base = image.substring(0, image.indexOf('/upload/'))
      let url = `${base}/upload/${split[split.length - 1]}`
      console.log(`downloading ${url}`)
      await download.image({ url: url, dest: './images' })
    })
  }
  catch (err) {
    console.error(err)
  }
}

if (!argv['url']) {
  console.error('url required')
  return
}

downloadFiles(argv['url'])