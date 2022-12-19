import  { Page, Locator } from '@playwright/test';

export class ProductBoltTshirtPage {
    //data modifiers
    readonly page: Page
    readonly sauceLabsBoltTshirtAddToCart: Locator
    readonly cartIcon: Locator
    readonly backToProductsButton: Locator

    constructor(page: Page) {
        this.page = page
        this.sauceLabsBoltTshirtAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.backToProductsButton =  page.locator('[data-test="back-to-products"]')

    }
}

