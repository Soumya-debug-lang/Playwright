class HomePage{
    page:any;
    booknowbtn: any;
    headingTEXT: any;
    hometext: any;
    searchIcon: any;
    loginIcon: any;
    constructor(page){
        this.page=page;
        this.booknowbtn=page.locator('//*[@id="navigation"]/ul[1]/li[5]/a')
        this.headingTEXT=page.locator("//div[@id='navigation'] //a[text()= ' Contact Us ']")
        this.hometext=page.locator('text=Home')
        this.searchIcon=page.locator('//*[@id="navigation"]//*[@routerlink="contactus"]')
        this.loginIcon=page.locator("//h1[text()='Login']")
        this.
    }

}
export default HomePage;
