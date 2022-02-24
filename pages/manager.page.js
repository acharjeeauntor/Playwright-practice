const managerSelectors = {
    managerIdSelector: "tr .heading3>td",

}


class ManagerPage {

    constructor(page) {
        this.page = page
    }


    async getManagerId() {
        let result = await this.page.innerText(managerSelectors.managerIdSelector)
        return await result.split(':')[1].replace(/\s/g, '')

    }
}
module.exports = { ManagerPage, managerSelectors }