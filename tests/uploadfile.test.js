const { test, expect } = require('@playwright/test');



test.describe('Upload and Download File', () => {

    const file1 = "package.json"
    const file2 = "package-lock.json"

    test("upload single/multiple files with input=file", async ({ page }) => {
        await page.goto('https://www.sendgb.com/');
        //const locator = page.locator("input[name='qqfile']")
        //await locator.setInputFiles(['package.json','package-lock.json'])
        await page.setInputFiles("input[name='qqfile']", [file1, file2])
        expect(page.locator("#upload-form-list")).toContainText("package")
    })



    test("upload single/multiple files without input=file", async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload')
        page.on("filechooser", async (filechooser) => {
            //console.log(filechooser.isMultiple())
            await filechooser.setFiles([file1, file2])
        })
        await page.click(".example+div#drag-drop-upload", { force: true })
        expect(page.locator('.example+div#drag-drop-upload')).toContainText("package")

    })

})
