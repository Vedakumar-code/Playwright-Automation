import {test as setup}from '@playwright/test';
import { homePage } from '../../WebPages/homePage';
import { loginPage } from '../../WebPages/loginPage';
import { generateUserData } from '../../utils/signupData';

setup('one time login setup', async({page})=>
{
    const home = new homePage(page);
    const login = new loginPage(page);
    const user = generateUserData();

    await page.goto('/');
    await home.clicksignupLoginBtn();

    await login.enterLoginCredentials(user.loginEmail, user.loginPassword);
    await login.clickLogin();

    await page.context().storageState({path: 'auth.json'});

}
)