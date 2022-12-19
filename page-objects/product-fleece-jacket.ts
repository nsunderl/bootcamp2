import  { Page, Locator } from '@playwright/test';

export class ProductFleeceJacketPage {
    //data modifiers
    readonly page: Page
    readonly sauceLabsFleeceJacketAddToCart: Locator
    readonly cartIcon: Locator
    readonly backToProductsButton: Locator

    constructor(page: Page) {
        this.page = page
        this.sauceLabsFleeceJacketAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.backToProductsButton =  page.locator('[data-test="back-to-products"]')

    }
}

