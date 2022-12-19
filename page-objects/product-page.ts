import  { Page, Locator } from '@playwright/test';

export class ProductPage {
    //data modifiers
    readonly page: Page
    readonly sauceLabsBackpack: Locator
    readonly sauceLabsBackpackImage: Locator
    readonly sauceLabsBackpackAddToCart: Locator
    readonly sauceLabsBikeLight: Locator
    readonly sauceLabsBikeLightImage: Locator
    readonly sauceLabsBikeLightAddToCart: Locator
    readonly sauceLabsBoltTshirt: Locator
    readonly sauceLabsBoltTshirtImage: Locator
    readonly sauceLabsBoltTshirtAddToCart: Locator
    readonly sauceLabsFleeceJacket: Locator
    readonly sauceLabsFleeceJacketImage: Locator
    readonly sauceLabsFleeceJacketAddToCart: Locator
    readonly sauceLabsOnesie: Locator
    readonly sauceLabsOnesieImage: Locator
    readonly sauceLabsOnesieAddToCart: Locator
    readonly sauceLabsTestallTheThingsTshirt: Locator
    readonly sauceLabsTestallTheThingsTshirtImage: Locator
    readonly sauceLabsTestallTheThingsTshirtAddToCart: Locator
    readonly sortByDropDown: Locator
    readonly cartIcon: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.sauceLabsBackpack = page.locator('[id="item_4_title_link"]')
        this.sauceLabsBackpackImage = page.locator('[id="item_4_img_link"]')
        this.sauceLabsBackpackAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.sauceLabsBikeLight = page.locator('[id="item_0_title_link"]')
        this.sauceLabsBikeLightImage = page.locator('[id="item_0_img_link"]')
        this.sauceLabsBikeLightAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.sauceLabsBoltTshirt = page.locator('[id="item_1_title_link"]')
        this.sauceLabsBoltTshirtImage = page.locator('[id="item_1_image_link"]')
        this.sauceLabsBoltTshirtAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.sauceLabsFleeceJacket = page.locator('[id="item_5_title_link"]')
        this.sauceLabsFleeceJacketImage = page.locator('[id="item_5_img_link"]')
        this.sauceLabsFleeceJacketAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.sauceLabsOnesie = page.locator('[id="item_2_title_link"]')
        this.sauceLabsOnesieImage = page.locator('[id="item_2_img_link"]')
        this.sauceLabsOnesieAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
        this.sauceLabsTestallTheThingsTshirt = page.locator('[id="item_3_title_link"]')
        this.sauceLabsTestallTheThingsTshirtImage = page.locator('[id="item_3_img_link"]')
        this.sauceLabsTestallTheThingsTshirtAddToCart = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
        this.sortByDropDown = page.locator('[data-test="product_sort_container"]')
        // product_sort_container options "az","za","lohi","hilo"
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
    }
}