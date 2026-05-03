import { basePage } from "./basePage";

export class checkoutPage extends basePage
{
    constructor (page)
    {
        super(page);
        this.placeOrderBtnLocator = page.locator("//a[normalize-space()='Place Order']");
        
    }

     async clickPlaceOrder()
    {
        await this.click(this.placeOrderBtnLocator);
    }
}