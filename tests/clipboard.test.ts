
import {test} from '@playwright/test'
import clipboard from 'clipboardy';
test("Access Clipboard",async({page})=>{
await test.step("Goto the https://clipboardjs.com/ ",async()=>{
    await page.goto("https://clipboardjs.com/")
})

await test.step("Click to copy ",async()=>{
    await page.click("//button[@data-clipboard-action='copy']")
})

await test.step("access the clipboard ",async()=>{
  const text = await clipboard.read();
   console.log("My text is: "+text)
})

})