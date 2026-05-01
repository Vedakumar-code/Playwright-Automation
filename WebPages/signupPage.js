import {basePage} from './basePage';

export class signupPage extends basePage{

    constructor(page)
    {
        super(page);

        this.nameInput = page.locator("input[placeholder='Name']");
        this.emailInput = page.locator("input[data-qa='signup-email']");
        this.signupBtn = page.locator("button[data-qa='signup-button']");
        this.genderRadio = page.locator("label[for='id_gender1']");
        this.password = page.locator("#password");
        this.day = page.locator("#days");
        this.month = page.locator("#months");
        this.year = page.locator("#years");
        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.address = page.locator("#address1");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobile = page.locator("#mobile_number");
        this.createAccountBtn = page.locator("button[data-qa='create-account']");
        this.SuccessMSG = page.locator("h2[class='title text-center'] b");
        this.continue = page.locator(".btn.btn-primary");

    }

    async enterSignupDetails(name, email) {
        await this.fill(this.nameInput, name);
        await this.fill(this.emailInput, email);
        await this.click(this.signupBtn);
    }

    async fillAccountDetails(password, day, month, year) {
        await this.click(this.genderRadio);
        await this.fill(this.password, password);
        await this.select(this.day, day);
        await this.select(this.month, month);
        await this.select(this.year, year);
    }

    async fillAddressDetails(firstName, lastName, address, country, state, city, zipcode, mobileNumber) {
        await this.fill(this.firstName, firstName);
        await this.fill(this.lastName, lastName);
        await this.fill(this.address, address);
        await this.select(this.country, country);
        await this.fill(this.state, state);
        await this.fill(this.city, city);
        await this.fill(this.zipcode, zipcode);
        await this.fill(this.mobile, mobileNumber);
    }

    async createAccount() {
        await this.click(this.createAccountBtn);
    }
    async clickContinue() {
        
        await this.click(this.continue);
    }
}