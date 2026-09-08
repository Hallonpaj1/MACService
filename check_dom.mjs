import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5173');
  
  // Wait for the element
  await page.waitForSelector('.navbar-brand');
  
  const results = await page.evaluate(() => {
    const el = document.querySelector('.navbar-brand');
    const styles = window.getComputedStyle(el);
    return {
      tagName: el.tagName,
      className: el.className,
      innerText: el.innerText,
      innerHTML: el.innerHTML,
      fontFamily: styles.fontFamily,
      fontSize: styles.fontSize,
      display: styles.display
    };
  });
  
  console.log('--- .navbar-brand ---');
  console.log(JSON.stringify(results, null, 2));
  
  const logoImgResults = await page.evaluate(() => {
    const el = document.querySelector('.navbar-logo img');
    if (!el) return null;
    return {
      tagName: el.tagName,
      src: el.src,
      alt: el.alt
    };
  });
  
  console.log('\n--- .navbar-logo img ---');
  console.log(JSON.stringify(logoImgResults, null, 2));

  await browser.close();
})();
