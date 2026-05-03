import { test, expect } from '@playwright/test';
import { productsPage } from '../WebPages/productsPage';
import { cartPage } from '../WebPages/cartPage';
import { checkoutPage } from '../WebPages/checkoutPage';
import { placeOrderPage } from '../WebPages/placeOrderPage';
import { basePage } from '../WebPages/basePage';
import { generatePaymentData } from '../utils/signupData';

test.use({ storageState: 'auth.json' });

test('placing an order', async ({ page }) => {

    const productName = 'Men Tshirt';

    const productspage = new productsPage(page);
    const cartpage = new cartPage(page);
    const checkoutpage = new checkoutPage(page);
    const placeorderpage = new placeOrderPage(page)
    const paymentDetails = generatePaymentData();

    await productspage.navigate("https://automationexercise.com/products");

    await productspage.addProductToCart(productName);
    await productspage.verifyProductAddedPopup();
    await productspage.continueShopping();
    await productspage.proceedToCheckout();

    await cartpage.verifyProductInCart();
    await cartpage.validatePrice();
    await cartpage.clickProceedToCheckout();
    await checkoutpage.clickPlaceOrder();

    await placeorderpage.enterPaymentDetails(paymentDetails);
    await placeorderpage.clickPlaceOrder();
    await placeorderpage.validateSuccessOrderMsg();

})