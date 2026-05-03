import { expect } from "@playwright/test";
import { basePage } from "./basePage";

export class checkoutPage extends basePage
{
    constructor (page)
    {
        super(page);
        this.nameOnCardLocator = page.locator("input[name='name_on_card']");
        this.cardNumerLocator = page.locator("input[name='card_number']");
        this.cvcLocator = page.locator("input[placeholder='ex. 311']");
        this.monthLocator = page.locator("input[placeholder='MM']");
        this.yearLocator = page.locator("input[placeholder='YYYY']");
        this.placeOrderBtnLocator = page.locator("#submit");
        this.successMSGLocator = page.locator("//p[normalize-space()='Congratulations! Your order has been confirmed!']");
    }

    async enterPaymentDetails(paymentDetails)
    {
        await this.nameOnCardLocator.scrollIntoViewIfNeeded();
        await this.fill(this.nameOnCardLocator, paymentDetails.nameOnCard);
        await this.fill(this.cardNumerLocator, paymentDetails.cardNumber);
        await this.fill(this.cvcLocator, paymentDetails.cvcNumber);
        await this.fill(this.monthLocator, paymentDetails.month);
        await this.fill(this.yearLocator, paymentDetails.year);

    }

    async clickPlaceOrder()
    {
        await this.click(this.placeOrderBtnLocator);

    }

    async validateSuccessOrderMsg()
    {
        await expect(this.successMSGLocator).toContainText("Congratulations! Your order has been confirmed!");
    }

}