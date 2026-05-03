import { basePage } from "./basePage";
import { expect } from "@playwright/test";

export class checkoutPage extends basePage {
    constructor(page) {
        super(page);
        this.placeOrderBtnLocator = page.locator("#cart_items .btn.btn-default.check_out");
        //this.modalLocator = page.locator('#checkoutModal');
        this.checkoutModal = page.locator('#checkoutModal');

    }

    async clickPlaceOrder() {

        // if (await this.modalLocator.isVisible()) {
        //     await this.page.locator('a[href="/login"]').click();
        // }

        await this.checkoutModal.waitFor({ state: 'hidden' });

        // await this.placeOrderBtnLocator.scrollIntoViewIfNeeded();
        await this.click(this.placeOrderBtnLocator);
    }

}