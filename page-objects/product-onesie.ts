import  { Page, Locator } from '@playwright/test';

export class ProductOnesiePage {
    //data modifiers
    readonly page: Page
    readonly sauceLabsOnesieAddToCart: Locator
    readonly cartIcon: Locator
    readonly backToProductsButton: Locator


    constructor(page: Page) {
        this.page = page
        this.sauceLabsOnesieAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.backToProductsButton =  page.locator('[data-test="back-to-products"]')

    }
}