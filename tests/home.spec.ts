import { test, expect, } from '@playwright/test';
import HomePage from './pages/home.page';

test.describe('Home', () => {
    let homePage;
    test('Open about us Page ans verify title', async ({ page }) => {
homePage= new HomePage(page);
        // open url
        await page.goto('https://crownpharmacywebsite.azurewebsites.net/aboutus-page')


        // verify title

        await expect(page).toHaveTitle('Crown Pharmacy')


    })
    test('Open admin page and verify title', async ({ page }) => {
        // open url
        await page.goto('https://crownpharmacywebadmin.azurewebsites.net/')

        // verify title

        await expect(page).toHaveTitle('Login - Crown Pharmacy Admin')


    })

    test('Open page verify title', async ({ page }) => {
        homePage= new HomePage(page);
        // open url
        await page.goto('https://crownpharmacywebsite.azurewebsites.net/')

        // Click book now button

       // await page.locator('//*[@id="navigation"]/ul[1]/li[5]/a').click();
       await homePage.booknowbtn.click()

        // verify url
        //  await expect(page).toHaveURL('https://crownpharmacywebsite.azurewebsites.net/contactus');
        await expect(page).toHaveURL(/.*contactus/);


    })



    test(' Verify heading text is visible using text selector', async ({ page }) => {
        homePage= new HomePage(page);
        // open url
        await page.goto('https://crownpharmacywebsite.azurewebsites.net/')

        // find the text locator

        //const headingTEXT = await page.locator("//div[@id='navigation'] //a[text()= ' Contact Us ']");
        const headingTEXT=await homePage.headingTEXT

        // verify heading text is visible
        await expect(headingTEXT).toBeVisible();


    })

    test(' Verify my home link is enabled using text and css selector ', async ({ page }) => {
        // open url
        await page.goto('https://crownpharmacywebsite.azurewebsites.net/')

        // find the home text

        //const hometext = await page.locator('text=Home');
        const hometext=await homePage.hometext
        // const hometext = await page.locator(' id=navigation >> text= About Us ');
        // const hometext = await page.locator(' id=navigation:has-text("About Us")')

        // verify home text is visible
        await expect(hometext).toBeEnabled();


    })
 
    test(' Verify searchIcon us icon is visible using xpath selector ', async ({ page }) => {
        // open url
             
    //     test.use({viewport:{width:1920,height:966}}),

        await page.goto('https://crownpharmacywebsite.azurewebsites.net/')

         console.log(await page.viewportSize()?.width);
         console.log(await page.viewportSize()?.height);
        



        // find the searchIcon us icon
         //const searchIcon = await page.locator('//*[@id="navigation"]//*[@routerlink="contactus"]');
         const searchIcon=await homePage.searchIcon
       

        // verify contact us icon is visible
        await expect(searchIcon).toBeVisible();


    })


    test('Verify login icon  ', async ({ page }) => {
        // open url
             
    //     test.use({viewport:{width:1920,height:966}}),

        await page.goto('http://40.114.69.27/')

        //  console.log(await page.viewportSize()?.width);
        //  console.log(await page.viewportSize()?.height);
        



        // find the login us icon
         //const loginIcon = await page.locator("//h1[text()='Login']").click();
         const loginIcon=await homePage.loginIcon
       

        // // verify contact us icon is visible
        // await expect(loginIcon).toBeVisible();


    })


    // test('Verify text of all nav links', async ({ page }) => {
        
    //           // open url
    
         
    //     await page.goto('https://practice-automation.com/')

    //   const expectedLinks = [

    //       "Home",
    //       "About",
    //       "Shop",
    //       "Blog",
    //       "Contact",
    //       "My account",
    //       ];
        



    //     // find the nav links
    //      const navLinks =  page.locator('#primary-menu li[id*=menu]');
         

    //     //  verify nav links text
    //      await expect(await navLinks.allTextContents()).toEqual(expectedLinks);


    // })


})