import LoginPage from "./loginPage";

export default class Pomanager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page)
    }

    getLoginPage(){
        return this.loginPage;
    }
}