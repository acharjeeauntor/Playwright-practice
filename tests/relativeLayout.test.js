const{test,expect} = require("@playwright/test")

test.use({
    baseURL:"https://github.com"
})

test("Test Select Element based on layout",async({page})=>{
await page.goto("/login")
await page.fill("input:below(:text('Username or email address'))","Auntor")
await page.type("input[name='password']:above(:text('Sign in'))","Auntor")
await page.locator("a:near(:text('Password'))").click()
await page.waitForTimeout(5000)
})