import { test,expect} from '@playwright/test';

test.describe('H',() =>     
    test('Click Test cases button using CSS Selector ',async ({page}) =>{
// open url
await page.goto('https://practice.automationtesting.in/about');
   
//verify title
await expect(page).toHaveTitle('About practice.automationtesting.in ');

test('Click Test cases button using CSS Selector ',async ({page}) =>{
    // open url
    await page.goto('https://practice.automationtesting.in');
       
    //click the button
    await page.locator('menu-item-40').click();
    //verify url has /shop
    await expect(page).toHaveTitle('About-Practice Automation Site');
    

})
})