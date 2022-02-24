const { test } = require("@playwright/test")

test("Login to the tryhackme site with local storage Data", async ({ browser }) => {

    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage()
    await page.goto("https://tryhackme.com/")
    await page.waitForTimeout(6000)
})