import  { Page, Locator } from '@playwright/test';

export class ProductTestallthingsRedPage {
    //data modifiers
    readonly page: Page
    readonly sauceLabsTestallTheThingsTshirtAddToCart: Locator
    readonly cartIcon: Locator
    readonly backToProductsButton: Locator

    constructor(page: Page) {
        this.page = page
        this.sauceLabsTestallTheThingsTshirtAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-test.allthethings()-t-shirt-(red)"]')
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.backToProductsButton =  page.locator('[data-test="back-to-products"]')

    }
}

