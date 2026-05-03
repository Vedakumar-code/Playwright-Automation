import { basePage } from "./basePage";
import { expect } from "@playwright/test";

export class checkoutPage extends basePage {
    constructor(page) {
        super(page);
        this.placeOrderBtnLocator = page.locator("#cart_items .btn.btn-default.check_out");


    }

    async clickPlaceOrder() {
    
        await this.placeOrderBtnLocator.scrollIntoViewIfNeeded();
        await this.click(this.placeOrderBtnLocator);
    }
    
}