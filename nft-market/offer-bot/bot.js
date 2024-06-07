import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://marketplace.skymavis.com/collections/0xa1ce53b661be73bf9a5edd3f0087484f0e3e7363/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  const searchResultSelector = '.OverallItem_overallItem'
  
  const element = await page.$(searchResultSelector);

  // Print the full title
  if (element === null) {
    console.log('Element not found.');
  } else {
    // Performing actions on the element
    console.log('FLOOR PRICE: "%s".', element);
  }

  await browser.close();
})();
