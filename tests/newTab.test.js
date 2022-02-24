const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');


test.describe('test demo qa site new tab page', () => {

    test("Test New Tab", async ({ page, context,browserName }) => {
        allure.severity("Critical")
       // await page.goto('/browser-windows');
       await page.goto('https://letcode.in/windows')
       
        // Get page after a specific action (e.g. clicking a link)
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            //page.click('#tabButton') // Opens a new tab
            page.click('#home')
        ])
        await newPage.waitForLoadState();
        //console.log(newPage)
        console.log(newPage.url());
        //expect(newPage.locator("#sampleHeading")).toBeEmpty()
    })

})