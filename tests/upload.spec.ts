
import {test,expect} from '@playwright/test'
test.describe('Upload File',()=>{
    test('should upload a test file',async({page}))=>
    {//provide test file path
        const filePath=path.join(_dirname,'../data/smb-file.pdf');
        //upload test file
        await.page.setInputFiles('input/upfile_1',filePath);
        //click the submit button
        await page.locator('/upload_1').click();
        //harcoded sleep-WROND WAY
        //await page.waitForTimeout(5000);
    
        //wait for condition
        //await page.locator('#wfu_messageblock_header_1_1')
        //.waitFor({state:'visible',timeout:10000})
         
       
        //assertion
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully',timeout:10000);
        
    

    })
})