import { Page, Locator } from "@playwright/test";

class loginpage {
     page: Page;
     mail: Locator;
     password: Locator;
     remember: Locator;
     loginbtn: Locator;
     validTitle: Locator;
     InvalidTitle: Locator;



    constructor(page) {
        this.page = page;

        this.mail = page.locator('#LoginUser');
        this.password = page.locator('[name=LoginPassword]');
        this.remember = page.locator('//label[text()="Remember Me"]');
        this.loginbtn = page.locator('#Login');
        this.validTitle = page.locator("//h1[text()='Dashboard']");
        this.InvalidTitle = page.locator("//div[@class='alert alert-danger']");



    }

}
export default loginpage;