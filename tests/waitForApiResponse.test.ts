// const {test} = require("@playwright/test")

import {test} from "@playwright/test"

test("Wait For API response test",async({page})=>{
await page.goto("https://letcode.in/elements")


// Verify API Status-URL-Body

const [response] = await Promise.all([
     page.waitForResponse(res=>
         res.status()==200
         &&
         res.url()=="https://api.github.com/users/acharjeeauntor"
         &&
         res.body().then(b=>{
             return b.includes("Auntor Acharja")
         })
    ),
    page.fill('input[name="username"]',"acharjeeauntor"),
    page.click("#search")

])

console.log(await response.json())



})