import {test, expect} from '@playwright/test';
import { homePage } from '../WebPages/homePage';
import {signupPage} from '../WebPages/signupPage';
import { loginPage } from '../WebPages/loginPage';
import { generateUserData } from '../utils/signupData';

test('Sign Up and Login flow', async({page})=>
{
    
    const home = new homePage(page);
    const signup = new signupPage(page);
    const login = new loginPage(page);
    const user = generateUserData();

    await home.navigate("https://automationexercise.com/");
    await home.clicksignupLoginBtn();

    await signup.enterSignupDetails(user.name, user.email);
    const loginEmail = console.log(user.email);
    const loginPassword = console.log(user.password);
    await signup.fillAccountDetails(user.password, user.day, user.month, user.year);
    await signup.fillAddressDetails(user.firstName, user.lastName, user.address, user.country, 
    user.state, user.city, user.zipcode, user.mobileNumber);
    await signup.createAccount();
    await expect(signup.SuccessMSG).toBeVisible();
    await signup.clickContinue();

    await home.clickLogout();

    await login.enterLoginCredentials(user.email, user.password);
    await login.clickLogin();
    await page.pause();


})
