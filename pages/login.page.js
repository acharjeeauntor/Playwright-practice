const loginSelectors = {
    userIdInputSelector: "[name='uid']",
    passwordInputSelector: "[name='password']",
    loginButtonSelector: "[name='btnLogin']"
}


class LoginPage {

    constructor(page) {
        this.page = page
    }

    async navigate(url) {
        await this.page.goto(url)
    }
    async submitLoginForm(userid, pass) {
        await this.page.fill(loginSelectors.userIdInputSelector, userid)
        await this.page.type(loginSelectors.passwordInputSelector, pass)
        await this.page.press(loginSelectors.loginButtonSelector, 'Enter');
        //await this.page.click(loginSelectors.loginButtonSelector)
    }
}
module.exports = { LoginPage,loginSelectors }