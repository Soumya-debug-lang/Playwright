import { Page, Locator } from '@playwright/test';

class ChangePassword {

       page: Page;
       mail1: Locator;
       password1: Locator;
       remember1: Locator;
       loginbtn1: Locator;
       validTitle1: Locator;
       user1: Locator;
       Chanpswd1: Locator;
       OldPswd1: Locator;
       NewPswd1: Locator;
       ConfmPswd1: Locator;
       ChngPswdbtn: Locator;
       alert: Locator;
       oldpwsdwrong: Locator;
       oldnewntsame: Locator;




       constructor(page) {
        this.page = page;

        this.mail1 = page.locator('#LoginUser');
        this.password1 = page.locator('[name=LoginPassword]');
        this.remember1 = page.locator('//label[text()="Remember Me"]');
        this.loginbtn1 = page.locator('#Login');
        this.validTitle1 = page.locator("//h1[text()='Dashboard']");
        this.user1 = page.locator("//span[@class='mr-2 d-none d-lg-inline text-gray-600 small']");
        this.Chanpswd1 = page.locator("//a[@class='dropdown-item'][1]");
        this.OldPswd1 = page.locator("[name='oldpwd']");
        this.NewPswd1 = page.locator("[name='newpwd']");
        this.ConfmPswd1 = page.locator("[name='cnfrmpwd']");
        this.ChngPswdbtn = page.locator("[name='submit']");
        this.alert= page.locator("//div[text()='Password changed successfully']");
        this.alert= page.locator("//div[@class='alert alert-danger']");
        this.alert= page.locator("//div[@class='alert alert-danger']");
        this.alert= page.locator("//div[@class='alert alert-danger']");
        this.alert= page.locator("//div[@class='alert alert-danger']");

     

     }



}
export default ChangePassword;