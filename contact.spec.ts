import{ test,expect} from '@playwright/test'
test.describe('Register',()=>{
    test('Fill Register form and verfy success message',async ({page}))=>
    {
    

        //open contact page
        await page.goto('https://practice.automationtesting.in')
       // fill out the input fields
       await page.locator('faker.internet.email()').fill('test@mail.com')
       await page.locator('password input').fill(test123)
       await page.locator('button[type=submit').click()
       const successAlert=page.locator('div[role="alert"]')
       await expect(successAlert).toHaveText('Hello test(not test Sign out)'))
    }
})