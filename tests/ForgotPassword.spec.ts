import {test, expect} from '@playwright/test';
import ForgotPassword from '../pages/ForgotPassword';

test.describe('FP',() => {
    let forgotPassword;

    test.only('Valid user', async ({ page }) => {
        
         forgotPassword = new ForgotPassword(page);
         await page.goto('http://40.114.69.27/');
         await page.waitForTimeout(3000);
         await forgotPassword.link.click();
         await forgotPassword.email.type('mohanbabu.g22@clientservertech.com');
         await page.waitForTimeout(3000);
         await forgotPassword.SubmitBtn.click();
         await page.waitForTimeout(3000);
         if (await forgotPassword.Valid.nth(0).isVisible()) {
            //  await page.waitForSelector(loginPage.validTitle);
            // await loginPage.validTitle.nth(0).allTextContents();
            console.log(await forgotPassword.Valid.nth(0).textContent());
        }
 })
          
           
        test('InValid user', async ({ page }) => {
        
            forgotPassword = new ForgotPassword(page);
            await page.goto('http://40.114.69.27/');
            await page.waitForTimeout(3000);
            await forgotPassword.link.click();
            await forgotPassword.email.type('mohanbabu.g2@clientservertech.com');
            await page.waitForTimeout(3000);
            await forgotPassword.SubmitBtn.click();
            await page.waitForTimeout(3000);
            if (await forgotPassword.InValid.nth(0).isVisible()) {
               //  await page.waitForSelector(loginPage.validTitle);
               // await loginPage.validTitle.nth(0).allTextContents();
               console.log(await forgotPassword.InValid.nth(0).textContent());

            }

            

        })

})