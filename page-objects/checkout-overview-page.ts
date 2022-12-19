import  { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
    //data modifiers
    readonly page: Page
    readonly firstName: Locator
    readonly lastName: Locator
    readonly postalCode: Locator

    readonly cartIcon: Locator
    readonly cancelButton: Locator
    readonly finishButton: Locator

    readonly backpackLink: Locator
    readonly fleeceJacketLink: Locator
    readonly bikeLightLink: Locator
    readonly boltTShirtLink: Locator
    readonly onesieLink: Locator
    readonly testAllThingsTShirtLink: Locator
    readonly totalAmount: Locator


    constructor(page: Page) {
        this.page = page
        this.firstName = page.locator('[data-test="firstName"]')
        this.lastName =  page.locator('[data-test="lastName"]')
        this.postalCode =  page.locator('[data-test="postalCode"]')
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.cancelButton = page.locator('[data-test="cancel"]')
        this.finishButton = page.locator('[data-test="finish"]')

        this.backpackLink = page.getByRole('link', { name: 'Sauce Labs Backpack' })
        this.bikeLightLink = page.getByRole('link', { name: 'Sauce Labs Bike Light' })
        this.boltTShirtLink = page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' })
        this.fleeceJacketLink = page.getByRole('link', { name: 'Sauce Labs Fleece Jacket' })
        this.onesieLink = page.getByRole('link', { name: 'Sauce Labs Onesie' })
        this.testAllThingsTShirtLink = page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (Red)' })
        this.totalAmount = page.getByText('Total: $140.34')

    }
}