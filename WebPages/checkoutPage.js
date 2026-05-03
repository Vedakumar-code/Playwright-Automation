import { basePage } from "./basePage";
import { expect } from "@playwright/test";

export class checkoutPage extends basePage
{
    constructor (page)
    {
        super(page);
        this.placeOrderBtnLocator = page.locator("//a[normalize-space()='Place Order']");
        
    }

     async clickPlaceOrder()
    {
        //await expect(this.placeOrderBtnLocator).toBeVisible();
        await this.click(this.placeOrderBtnLocator);
    }
}