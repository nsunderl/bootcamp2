import { test, expect } from '@playwright/test'
import { LoginPage} from '../page-objects/login-page'
import { ProductPage} from '../page-objects/product-page'
import { YourCartPage } from '../page-objects/your-cart'
import { CheckoutYourInfoPage } from '../page-objects/checkout-your-info-page'
import { CheckoutOverviewPage} from '../page-objects/checkout-overview-page'
import { CheckoutCompletePage} from '../page-objects/checkout-complete-page'

test('As a standard I buy one of everything at once', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const productPage = new ProductPage(page)
  const yourCartPage = new YourCartPage(page)
  const checkoutPage1 = new CheckoutYourInfoPage(page) 
  const checkoutPage2 = new CheckoutOverviewPage(page)
  const checkoutPage3 = new CheckoutCompletePage(page)

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

await productPage.sauceLabsBackpackAddToCart.click()
await productPage.sauceLabsBikeLightAddToCart.click()
await productPage.sauceLabsBoltTshirtAddToCart.click()
await productPage.sauceLabsFleeceJacketAddToCart.click()
await productPage.sauceLabsOnesieAddToCart.click()
await productPage.sauceLabsTestallTheThingsTshirtAddToCart.click()
await productPage.cartIcon.click()

await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
//await page.pause()
//await expect(yourCartPage.removeBackpackButton).toBeVisible()

await  expect(yourCartPage.removeBackpackButton).toBeVisible()
await  expect(yourCartPage.removeBoltTShirtButton).toBeVisible()
await  expect(yourCartPage.remomveFleeceJacketButton).toBeVisible()
await  expect(yourCartPage.removeOnesieButton).toBeVisible()
await  expect(yourCartPage.removeBikeLightButton).toBeVisible()
await  expect(yourCartPage.removeTestAllThingsTShirtButton).toBeVisible()

await yourCartPage.checkoutButton.click()

await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')

await checkoutPage1.firstName.fill('NAME')
await checkoutPage1.lastName.fill('LAST')
await checkoutPage1.postalCode.fill('99999')
await checkoutPage1.continueButton.click()

await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')

//await checkoutPage2.

await  expect(checkoutPage2.backpackLink).toBeVisible()
await  expect(checkoutPage2.bikeLightLink).toBeVisible()
await  expect(checkoutPage2.boltTShirtLink).toBeVisible()
await  expect(checkoutPage2.onesieLink).toBeVisible()
await  expect(checkoutPage2.fleeceJacketLink).toBeVisible()
await  expect(checkoutPage2.testAllThingsTShirtLink).toBeVisible()
await  expect(checkoutPage2.totalAmount).toBeVisible()

await checkoutPage2.finishButton.click()

await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')

await expect(checkoutPage3.orderComplete).toBeVisible()
await expect (checkoutPage3.orderPonyExpress).toBeVisible()
await expect (checkoutPage3.orderThankYou).toBeVisible()


})

