import { test, expect } from '@playwright/test';
import { LoginPage} from '../page-objects/login-page'


test('As a standard user login fails wrong password', async ({ page }) => {

  const loginPage = new LoginPage(page)

  await page.goto('https://www.saucedemo.com/');
// login page


 // await page.locator('[data-test="username"]').fill('standard_user');
await loginPage.usernameField.fill('standard_user')
//  await page.locator('[data-test="password"]').fill('secretsauce');
await loginPage.passwordField.fill('secretsauce')
  
//  await page.locator('[data-test="login-button"]').click();
await loginPage.loginButton.click()
// 
//await expect(page).toMatchObject(loginPage.errorDialog)
await expect(loginPage.errorDialog).toHaveText('Epic sadface: Username and password do not match any user in this service')


})


