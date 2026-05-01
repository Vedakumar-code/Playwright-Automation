import { basePage } from "./basePage";

export class homePage extends basePage 
{
    constructor(page)
    {

        super(page);
        this.signupLoginBtn = page.locator("//a[text()=' Signup / Login']");
        this.logout = page.locator("a[href='/logout']");
    }

    async clicksignupLoginBtn()
    {
        await this.click(this.signupLoginBtn);

    }
    async clickLogout()
    {
        await this.click(this.logout);
    }
}