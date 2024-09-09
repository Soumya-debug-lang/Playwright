import { test, expect } from '@playwright/test';
import ChangePassword from '../pages/ChangePassword';


test.describe('CP', () => {
    let changePassword: any;

    test('changePassword', async ({ page }) => {
    
        changePassword = new ChangePassword(page);
        await page.goto('http://40.114.69.27/');
        await changePassword.mail1.type('mohang');
        await changePassword.password1.type('Pass@123');


        await changePassword.remember1.click();
        await changePassword.loginbtn1.click();
        if (await changePassword.validTitle1.nth(0).isVisible) {

            console.log(await changePassword.validTitle1.nth(0).textContent());
        }

        // await page.waitForTimeout(5000);
        await changePassword.user1.click();
        //await page.waitForTimeout(2000);
        await changePassword.Chanpswd1.click();
        //  await page.waitForTimeout(4000);
        await changePassword.OldPswd1.type('Pass@123');
        await changePassword.NewPswd1.type('Pass@1234');
        await changePassword.ConfmPswd1.type('Pass@1234');
        await changePassword.ChngPswdbtn.click();
        // await page.waitForTimeout(4000);
        if (await changePassword.alert.nth(0).textContent()) {
            console.log(await changePassword.alert.nth(0).textContent());

            await changePassword.user1.click();
            await changePassword.Chanpswd1.click();
            // await page.waitForTimeout(4000);
            await changePassword.OldPswd1.type('Pass@1234');
            await changePassword.NewPswd1.type('Pass@123');
            await changePassword.ConfmPswd1.type('Pass@123');
            await changePassword.ChngPswdbtn.click();


        };

        // page.on('dialog', dialog => console.log(dialog.message()));
        // await page.getByRole('button').click();















    })










})