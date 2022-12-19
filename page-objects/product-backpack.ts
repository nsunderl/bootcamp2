import  { Page, Locator  } from '@playwright/test';

export class ProductBackpackPage {
    //data modifiers
    readonly page: Page
    readonly sauceLabsBackpack: Locator
    readonly sauceLabsBackpackImage: Locator
    readonly sauceLabsBackpackAddToCart: Locator
    readonly cartIcon: Locator
    readonly backToProductsButton: Locator
    readonly backPackLink: Locator
    readonly backPackPrice: Locator

    constructor(page: Page) {
        this.page = page
        this.sauceLabsBackpackAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        // product_sort_container options "az","za","lohi","hilo"
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.backToProductsButton =  page.locator('[data-test="back-to-products"]')
        this.backPackLink = page.getByText('Sauce Labs Backpack')
        this.backPackPrice = page.getByText('$29.99')
        
    }
}