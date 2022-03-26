const {test} = require("@playwright/test");

test(`Demo`, async ({ page }) => {
    await page.goto("https://www.syncfusion.com/react-ui-components/react-dropdown-list")

    await page.locator("[data-text='COMPANY']").click()
    await page.locator(".dropdown-menu")
        .locator("li", {
            has: page.locator("a"),
            hasText: "Microsoft Partner"
        }).click()


    await page.waitForTimeout(3000)


})
