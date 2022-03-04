const { test } = require("@playwright/test");
const Tesseract = require('tesseract.js');

test("Tesseract - Image to text", async ({ page }) => {

    await page.goto("https://www.justdial.com/Chennai/Car-Washing-Services-in-Adyar/nct-10079017");
    await page.waitForSelector('#best_deal_div >> text=X');
    await page.click('#best_deal_div >> text=X', { force: true, delay: 2000 });
    const images = await page.$$("section p.contact-info span a");
    for await (let img of images) {
        const name = Date.now();
        await img.screenshot({ path: `./ssImages/${name}.png` });
        await convertToText(`${name}.png`)
    }
});

async function convertToText(name) {
    let imgText = await Tesseract.recognize(
        `./ssImages/${name}`);
    console.log(imgText.data.text);
}