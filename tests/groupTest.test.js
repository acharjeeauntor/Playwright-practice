const { test, expect } = require('@playwright/test');
const { exec } = require('child_process');


test.describe('test demo qa site new tab page', () => {

    test("test-1 @smokeTest", async ({ page, context, browserName }) => {
        console.log("test 1")
    })
    test("test-2 @sanity_test", async ({ page, context, browserName }) => {
        console.log("test 2")
    })
    test("test-3 @fast", async ({ page, context, browserName }) => {
        console.log("test 3")
    })
    test("test-4 @sanity_test", async ({ page, context, browserName }) => {
        console.log("test 4")
    })
    test("test-5 @smokeTest", async ({ page, context, browserName }) => {
        console.log("test 5")

        // await exec('ls -la',
        //     (error, stdout, stderr) => {
        //         console.log(stdout);
        //         console.log(stderr);
        //         if (error !== null) {
        //             console.log(`exec error: ${error}`);
        //         }
        //     });
    })

})