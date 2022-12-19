import { test, expect } from '@playwright/test';
import { LoginPage} from '../page-objects/login-page'
import { ProductPage } from '../page-objects/product-page';


test('As a standard user views bike light page', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const productPage = new ProductPage(page)

  await page.goto('https://www.saucedemo.com/');
// login page


 // await page.locator('[data-test="username"]').fill('standard_user');
await loginPage.usernameField.fill('standard_user')
//  await page.locator('[data-test="password"]').fill('secret_sauce');
await loginPage.passwordField.fill('secret_sauce')
  
//  await page.locator('[data-test="login-button"]').click();
await loginPage.loginButton.click()
// products page loads after login
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

})


