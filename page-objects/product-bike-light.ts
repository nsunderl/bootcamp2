import  { Page, Locator } from '@playwright/test';

export class ProductBikeLightPage {
    //data modifiers
    readonly page: Page
    readonly sauceLabsBikeLight: Locator
    readonly sauceLabsBikeLightImage: Locator
    readonly sauceLabsBikeLightAddToCart: Locator
    readonly cartIcon: Locator
    readonly backToProductsButton: Locator

    constructor(page: Page) {
        this.page = page
        this.sauceLabsBikeLightAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.backToProductsButton =  page.locator('[data-test="back-to-products"]')

        
    }
}