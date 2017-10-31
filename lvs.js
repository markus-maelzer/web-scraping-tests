const puppeteer = require('puppeteer');

async function getPic(user, pw) {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://service.bfi-kaernten.at/lvs/');
  await page.focus('#Login1_tbBenutzername');
  await page.keyboard.type(user, {delay: 50});
  await page.focus('#Login1_tbKennwort');
  await page.keyboard.type(pw, {delay: 50});
  await page.waitFor(1000);
  await page.click('#Login1_Button1');

  // await page.click('whatever the anwesend button is named')
  await page.waitFor(5000);
  await browser.close();
}
module.exports = getPic;
