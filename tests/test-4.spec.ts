import { test, expect } from '@playwright/test';
import { LoginPage} from '../page-objects/login-page'
import { ProductBackpackPage } from '../page-objects/product-backpack';
import { ProductPage } from '../page-objects/product-page';


test('As a standard user views backpack page', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const productPage = new ProductPage(page)
  const productBackpack = new ProductBackpackPage(page)


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

await productPage.sauceLabsBackpack.click()

await productBackpack.backPackLink.isVisible()
await productBackpack.backPackPrice.isVisible()
await productBackpack.sauceLabsBackpackAddToCart.isVisible()
await productBackpack.cartIcon.isVisible()

})


