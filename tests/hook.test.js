const { test, expect } = require('@playwright/test');

// test.beforeEach(async ({ page }) => {
//   // await page.goto('https://demoqa.com/');
//   await console.log("before each test [2]")
// });

// test.beforeAll(async ()=>{
//   await console.log("before all test [1]")
// })

// test.afterEach(async ({ page }) => {
//   // await page.goto('https://demoqa.com/');
//   await console.log("after each test [3]")
// });

// test.afterAll(async ()=>{
//   await console.log("after all test [4]")
// })

test.describe('Playwright page',async()=>{

  console.log("Desc:1")


  test('Basic test1', async ({ page }) => {
    await  console.log("Desc:1 test 1")
  });

  test('Basic test2', async ({ page }) => {
    await console.log("Desc:1 test 2")
  });



})

test.describe('UI test page',async()=>{
  await console.log("Desc:2")
  test("Test Scrollbar", async ({ page, context }) => {
    // //await context.tracing.start({ screenshots: true, snapshots: true })
    await page.goto("/scrollbars")
    await page.click("#hidingButton")
    // //await context.tracing.stop({ path: 'trace.zip' })
  })
})
