import { Page, Locator } from '@playwright/test';

class ForgotPassword {

   page: Page;
   link: Locator;
   email: Locator;
   SubmitBtn: Locator;
   Valid: Locator;
   InValid: Locator;

   constructor (page){
   this.page= page;

   this.link = page.locator("//a[@class='m-auto']");
   this.email = page.locator('[name=EmailID]');
   this.SubmitBtn = page.locator("//input[@value='Submit']");
   this.Valid = page.locator("//div[@class='text-center'][2]");
   this.InValid = page.locator("//div[@class='alert alert-danger']");


   }
}

export default ForgotPassword;