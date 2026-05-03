import { test, expect } from '@playwright/test';
import { productsPage } from '../WebPages/productsPage';
import { cartPage } from '../WebPages/cartPage';
import { checkoutPage } from '../WebPages/checkoutPage';
import { basePage } from '../WebPages/basePage';
import { generatePaymentData } from '../utils/signupData';

test.use({ storageState: 'auth.json' });

test('placing an order', async ({ page }) => {

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

})