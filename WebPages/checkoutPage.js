import { basePage } from "./basePage";
import { expect } from "@playwright/test";

export class checkoutPage extends basePage {
    constructor(page) {
        super(page);
        this.placeOrderBtnLocator = page.locator("a.btn.btn-default.check_out");

    }

    async clickPlaceOrder() {
        //await expect(this.placeOrderBtnLocator).toBeVisible();
        await this.placeOrderBtnLocator.waitFor({ state: 'visible' });
        await this.click(this.placeOrderBtnLocator);
    }
    
}