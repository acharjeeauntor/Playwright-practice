const { test, expect } = require('@playwright/test');
const { LoginPage, loginSelectors } = require('../pages/login.page');
const { ManagerPage } = require("../pages/manager.page")
const loginInfo = require("../projectVariables/loginInfo.json")

let loginPage, managerPage

test.describe("Login test", () => {

    test("Login form test", async ({ page }) => {
        loginPage = new LoginPage(page)
        managerPage = new ManagerPage(page)
        await loginPage.navigate('./')
        await loginPage.submitLoginForm(loginInfo.userid,loginInfo.password)
       await managerPage.getManagerId().then(id=>{
        expect(id).toContain(loginInfo.userid)
       })
    })
})