import { basePage } from "./basePage";

export class loginPage extends basePage
{
    constructor(page)
    {
        super(page);
        this.loginEmail = page.locator("input[data-qa='login-email']");
        this.loginPassword = page.locator("input[placeholder='Password']");
        this.loginBtn = page.locator("button[data-qa='login-button']");

    }

    async enterLoginCredentials(loginEmail, loginPassword)
    {
        await this.fill(this.loginEmail, loginEmail);
        await this.fill(this.loginPassword, loginPassword);

    }
    async clickLogin()
    {
        await this.click(this.loginBtn);
    }

}