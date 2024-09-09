import {test,expect} from '@playwright/test';
test.describe('services',()=>{
    test('Access Vaccinations',async ({page})=>{
        await page.goto('services')
        await page.locator("//div[@id='navigation']/ul/li[3]/a").click()
        await expect(page).toHaveURL('99/Vaccinations')

    });
    test('Access Private Blood Testing', async({page})=>{
        await page.goto('services')
        await page.locator('//*[@id="navigation"]/ul[1]/li[3]/ul/div/li[6]/a').click()
        await expect(page).toHaveURL('100/Private%20Blood%20Testing')

    });
    
});