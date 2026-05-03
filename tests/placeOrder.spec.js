import{test, expect} from '@playwright/test';
import { productsPage } from '../WebPages/productsPage';
import { cartPage } from '../WebPages/cartPage';
import { checkoutPage } from '../WebPages/checkoutPage';
import { basePage } from '../WebPages/basePage';
import { generatePaymentData } from '../utils/signupData';
import { generateKey } from 'node:crypto';

test('placing an order', async({page})=>
{

    const productName = 'Men Tshirt';

    const productspage = new productsPage(page);
    const cartpage = new cartPage(page);
    const checkoutpage = new checkoutPage(page)
    const paymentDetails = generatePaymentData();

    await productspage.navigate("https://automationexercise.com/products");

    await productspage.addProductToCart(productName);
    await productspage.verifyProductAddedPopup();
    await productspage.continueShopping();
    await productspage.proceedToCheckout();

    await cartpage.verifyProductInCart();
    await cartpage.validatePrice();
    await cartpage.clickProceedToCheckout();
    await cartpage.clickPlaceOrder();

    await checkoutpage.enterPaymentDetails(paymentDetails);
    await checkoutpage.clickPlaceOrder();
    await checkoutpage.validateSuccessOrderMsg();


    

    // const products = page.locator(".features_items .col-sm-4");
    // const count = await products.count();

    // for (let i=0; i<=count; i++)
    // {
    //     const product = products.nth(i);
    //     const productNames = await product.locator("p").allTextContents();
    //     if (productNames.some(text => text.trim() === productName))
    //     {
    //         await product.locator(".add-to-cart").first().click();
    //         break;
    //     }

    // }

    // const productAddedPopup = page.locator(".modal-content");
    // await expect(productAddedPopup).toBeVisible();
    // await expect(productAddedPopup).toContainText("Your product has been added to cart.");
    // await productAddedPopup.locator("//button[text()='Continue Shopping']").click();

    // await page.locator("//a[text()=' Cart']").click();
    // const cartProduct = page.locator("a[href='/product_details/2']");
    // await expect(cartProduct).toBeVisible();
    // //await page.pause();

    // await page.locator("a.btn.btn-default.check_out").click();

    // const productPriceText = await page.locator(".cart_total p.cart_total_price").first().textContent();
    // const productPrice = parseInt(productPriceText.replace(/\D/g, ''));

    // const totalText = await page.locator("//tbody/tr/td[4]/p[1]").textContent();
    // const actualPrice = parseInt(totalText.replace(/\D/g, ''));

    // await expect(actualPrice).toBe(productPrice);

    // console.log(actualPrice);
    // console.log(productPrice);

    // await page.locator("a.btn.btn-default.check_out").click();

    // await page.locator("input[name='name_on_card']").fill("vedakumar");
    // await page.locator("input[name='card_number']").fill("123456789876");
    // await page.locator("input[placeholder='ex. 311']").fill("111");
    // await page.locator("input[placeholder='MM']").fill("05");
    // await page.locator("input[placeholder='YYYY']").fill("2028");
    // await page.locator("#submit").click();

    // const assertOrderConfirmation = await page.locator("//p[normalize-space()='Congratulations! Your order has been confirmed!']").textContent();
    // await expect(assertOrderConfirmation).toContain("Congratulations! Your order has been confirmed!");



}

)