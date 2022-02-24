const {test,expect} =require('@playwright/test')

test("Test Visiual Comperision:1",async({page})=>{
await page.goto("https://letcode.in/")
expect(await page.screenshot({
    fullPage:true
})).toMatchSnapshot("demo.png")
})

test("Test Visiual Comperision:2",async({page})=>{
    await page.goto("https://www.lastpass.com/features/password-generator")
    await page.waitForTimeout(5000)
    expect(await page.screenshot()).toMatchSnapshot("pass.png")
    })