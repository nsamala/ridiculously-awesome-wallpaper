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
    if (err.message.indexOf('Invalid character in entity name') == 0)
      console.error('Please provide a valid RSS feed')
    else
      console.error(err.message)
  }
}

exports.downloadFiles = downloadFiles