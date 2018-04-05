# Ridiculously Awesome Wallpaper
Downloads a set of images from an Kinja RSS feed. Could be used for rotating backgrounds on your computer

## Pre-requisites
* [Node.js](https://nodejs.org/en/)

## Installation (from NPM)
`npm install -g ridiculously-awesome-wallpaper`

## Installation (locally)
Clone this repository and install it from the local folder
```
git clone https://github.com/nsamala/ridiculously-awesome-wallpaper
npm install -g ./ridiculously-awesome-wallpaper
```

## Usage
For Jalopnik's Weekend Wallpaper,
```
ridiculously-awesome-wallpaper --url https://jalopnik.com/tag/weekend-wallpaper/rss
```

Provide the `--url` argument with any Kinja RSS feed you're looking to download. It makes the assumption that the image you're looking for is in the first `<img>` tag of the content. There's probably a better way to do this.

## Bonus Points
Add a cron tab to make it automatically run this code to keep up with the latest images. 
