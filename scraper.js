const puppeteer = require('puppeteer');
// const CREDS = require('./creds');


async function run(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log("page Created");


  await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 0});

  console.log("On the page");

  await page.waitForSelector('.kf1m0 div')
  let element = await page.$('.kf1m0 div')
  let value = await page.evaluate(el => el.textContent, element)

  console.log(value);
  browser.close();

  return value;
}

module.exports = {run};
