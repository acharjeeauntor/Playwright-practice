const { test } = require("@playwright/test")
test("Block images - network Intercept", async ({ page }) => {
    await page.route("**/*", request => {
        return request.request().resourceType() === "image" ? request.abort() : request.continue()
    })
    await page.goto("https://unsplash.com/t/people")
    await page.waitForTimeout(5000)
})

test("Block ads - network Intercept", async ({ page }) => {
    await page.route("**/*", request => {
        return request.request().url().startsWith("https://googleads.g.doubleclick.net/pagead/ads") ? request.abort() : request.continue()
    })
    await page.goto("https://letcode.in/test")
    await page.waitForTimeout(5000)
})