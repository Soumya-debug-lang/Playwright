import { test, expect } from '@playwright/test';
import loginpage from '../pages/login';
//eslint-disable-next-line @typescript-eslint/no-var-require
const path=require('path');

test.describe('my document', () => {
    let loginPage: any;

    test('Valid Details', async ({ page }) => {
        loginPage = new loginpage(page);
        await page.goto('http://40.114.69.27/');
        await loginPage.mail.type('mohang');
        await loginPage.password.type('Pass@123');

        await page.waitForTimeout(5000);
        await loginPage.remember.click();
        await loginPage.loginbtn.click();
        await page.waitForTimeout(10000);
        if (await loginPage.validTitle.nth(0).isVisible()) {
            //  await page.waitForSelector(loginPage.validTitle);
            // await loginPage.validTitle.nth(0).allTextContents();
            console.log(await loginPage.validTitle.nth(0).textContent());
        }
        //   await page.pause();
        //  await expect(loginPage.validTitle).toHaveTitle('Dashboard-EHRVMS');



    })

    test('Invalid details', async ({ page }) => {

        loginPage = new loginpage(page);
        await page.goto('http://40.114.69.27/');
        await loginPage.mail.type('mohang');
        await loginPage.password.type('Pass@1234');

        await page.waitForTimeout(5000);
        await loginPage.remember.click();
        await loginPage.loginbtn.click();
        await page.waitForTimeout(10000);


        if (await loginPage.InvalidTitle.nth(0).isVisible()) {
            //  await page.waitForSelector(loginPage.validTitle);
            // await loginPage.validTitle.nth(0).allTextContents();
            console.log(await loginPage.InvalidTitle.nth(0).textContent());
        }



    })






})


