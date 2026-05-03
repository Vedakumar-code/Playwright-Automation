import { basePage } from "./basePage";

export class productsPage extends basePage {
    constructor(page) {
        super(page);
        // locator for all products
        this.productsLocator = page.locator(".features_items .col-sm-4");
        // popup after adding product
        this.productAddedPopupLocator = page.locator(".modal-content");
        // continue shopping button inside popup
        this.continueBtnLocator = page.locator("//button[text()='Continue Shopping']");
        // proceed to cart button
        this.proceedToCheckoutBtnLocator = page.locator("//a[text()=' Cart']");


    }
    async addProductToCart(productName) {

        const count = await this.productsLocator.count();

        for (let i = 0; i < count; i++) 
        {
            const product = this.productsLocator.nth(i);
            const productNames = await product.locator("p").allTextContents(); // get all product name texts
            if (productNames.some(text => text.trim() === productName)) 
            {
                await product.locator(".add-to-cart").first().click(); // click add to cart
                break;
            }

        }

    }

    async verifyProductAddedPopup()
    {
        await this.productAddedPopupLocator.waitFor({state: 'visible'}); // wait for popup
        await this.page.waitForTimeout(500);
        
    }
    async continueShopping()
    {
        await this.click(this.continueBtnLocator);  //close popup
        
    }
    async proceedToCheckout()
    {
        await this.click(this.proceedToCheckoutBtnLocator);   // navigate to cart
    }



}