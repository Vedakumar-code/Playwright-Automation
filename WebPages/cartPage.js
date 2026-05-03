import { basePage } from "./basePage";
import {test, expect} from '@playwright/test';

export class cartPage extends basePage
{
    constructor (page)
    {
        super(page);
        this.assertCartProductLocator = page.locator("a[href='/product_details/2']");
        this.unitProductPriceLocator = page.locator("td[class='cart_price'] p");
        this.productQuantityLocator = page.locator(".cart_quantity");
        this.actualProductPriceLocator = page.locator(".cart_total_price");
        this.proceedToCheckoutLocator = page.locator("a.btn.btn-default.check_out");
        this.placeOrderBtnLocator = page.locator("//a[normalize-space()='Place Order']");
        
        
    }

    async verifyProductInCart()
    {
        await expect(this.assertCartProductLocator).toBeVisible(); // ensure product exists
    }

    async validatePrice()
    {
        const unitPriceText = await this.unitProductPriceLocator.first().textContent();  // get unit price
        const unitPrice = parseInt(unitPriceText.replace(/\D/g, ''));

        const quantityText = await this.productQuantityLocator.textContent();
        const quantity = parseInt(quantityText);

        const expectedTotalPrice = unitPrice * quantity ;  // expected total

        const actualPriceText = await this.actualProductPriceLocator.textContent();   // actual total
        const actualPrice = parseInt(actualPriceText.replace(/\D/g, ''));

        await expect(expectedTotalPrice).toBe(actualPrice);   // assertion → total should match expected (qty)
        console.log(expectedTotalPrice);
        console.log(actualPrice);

    }

    async clickProceedToCheckout()
    {
        await this.click(this.proceedToCheckoutLocator);   // proceed to checkout
    }

    async clickPlaceOrder()
    {
        await this.click(this.placeOrderBtnLocator);
    }

}