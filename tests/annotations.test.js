const { test,expect } = require("@playwright/test")

test("test1", async () => {
    console.log("this is test 1")
})

// test.only("test2", async () => {
//     console.log("this is test 2")
// })

test.skip("test3", async () => {
    console.log("this is test 3")
})

test("test4", async ({ browserName }) => {
    console.log("This is conditional skip of test")
    if (browserName === 'firefox') {
        test.skip()
    }
    console.log("this is test 4")
    console.log("This is conditional skip of test")
})

test("test5", async () => {
    test.fixme()
    console.log("this is test 5")
    console.log("This is fixme of test")
})

test("test6", async ({browserName}) => {
    console.log("Fail use, when we expect that this testcase will be fail")
    test.fail()
    expect(browserName).toBe("firefox1")
})


test("test7", async () => {
    test.slow()
    console.log("test 7")
   
})


