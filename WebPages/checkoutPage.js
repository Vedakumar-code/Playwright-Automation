import { basePage } from "./basePage";
import { expect } from "@playwright/test";

export class checkoutPage extends basePage {
    constructor(page) {
        super(page);
        this.placeOrderBtnLocator = page.locator("#cart_items .btn.btn-default.check_out");
        this.modalLocator = page.locator('#checkoutModal');
        

    }

    async clickPlaceOrder() {

        if (await this.modalLocator.isVisible()) {
            await this.modalLocator.getByRole('button', { name: 'Continue On Cart' }).click();
            await this.modalLocator.waitFor({ state: 'hidden' });
        }

        await this.click(this.placeOrderBtnLocator);
    }

}