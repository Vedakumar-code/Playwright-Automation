import { basePage } from "./basePage";
import { expect } from "@playwright/test";

export class checkoutPage extends basePage {
    constructor(page) {
        super(page);
        this.reviewYourOrderLocator = page.locator("//h2[normalize-space()='Review Your Order']");
        this.placeOrderBtnLocator = page.getByRole('link', { name: 'Place Order' });


    }

    async clickPlaceOrder() {
        //await expect(this.placeOrderBtnLocator).toBeVisible();
        await expect(this.reviewYourOrderLocator).toBeVisible();
        await this.placeOrderBtnLocator.scrollIntoViewIfNeeded();
        await this.click(this.placeOrderBtnLocator);
    }
    
}