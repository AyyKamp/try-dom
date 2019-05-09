const puppeteer = require('puppeteer');
const fs = require('fs')
const initClipboard = require('node-electron-clipboard')

console.time('lol')
;(async () => {
  let clipboard = await initClipboard()  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  fs.readFile('adv.html', 'utf-8', async (err, data) => {
    if (err) throw err;
    await page.setContent(data)
    const el = await page.$('#snippet-container')
    const image = await el.screenshot({path: 'lol.png'})
    clipboard.writeImage(image)
    await browser.close()
  });
})().then(_ => {
  console.timeEnd('lol')
  process.exitCode = 1
});

