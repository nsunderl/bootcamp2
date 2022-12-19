import  { Page, Locator } from '@playwright/test';

export class CheckoutYourInfoPage {
    //data modifiers
    readonly page: Page
    readonly firstName: Locator
    readonly lastName: Locator
    readonly postalCode: Locator

    readonly cartIcon: Locator
    readonly cancelButton: Locator
    readonly continueButton: Locator


    constructor(page: Page) {
        this.page = page
        this.firstName = page.locator('[data-test="firstName"]')
        this.lastName =  page.locator('[data-test="lastName"]')
        this.postalCode =  page.locator('[data-test="postalCode"]')
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.cancelButton = page.locator('[data-test="cancel"]')
        this.continueButton = page.locator('[data-test="continue"]')

    }
}