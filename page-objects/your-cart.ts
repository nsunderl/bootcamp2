import  { Page, Locator } from '@playwright/test';

export class YourCartPage {
    //data modifiers
    readonly page: Page
    readonly cartIcon: Locator
    readonly continueShoppingButton: Locator
    readonly checkoutButton: Locator
    readonly backpackLink: Locator
    readonly fleeceJacketLink: Locator
    readonly bikeLightLink: Locator
    readonly boltTShirtLink: Locator
    readonly onesieLink: Locator
    readonly testAllThingsTShirtLink: Locator
    readonly removeBackpackButton: Locator
    readonly remomveFleeceJacketButton: Locator
    readonly removeBikeLightButton: Locator
    readonly removeBoltTShirtButton: Locator
    readonly removeOnesieButton: Locator
    readonly removeTestAllThingsTShirtButton: Locator



    constructor(page: Page) {
        this.page = page
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
        this.checkoutButton = page.locator('[data-test="checkout"]')

        this.backpackLink = page.getByRole('link', { name: 'Sauce Labs Backpack' })
        this.bikeLightLink = page.getByRole('link', { name: 'Sauce Labs Bike Light' })
        this.boltTShirtLink = page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' })
        this.fleeceJacketLink = page.getByRole('link', { name: 'Sauce Labs Fleece Jacket' })
        this.onesieLink = page.getByRole('link', { name: 'Sauce Labs Onesie' })
        this.testAllThingsTShirtLink = page.getByRole('link', { name: 'Test.allTheThings() T-Shirt (Red)' })


         this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
         this.removeBikeLightButton = page.locator('[data-test="remove-sauce-labs-bike-light"]')
         this.removeBoltTShirtButton = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
         this.remomveFleeceJacketButton = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')
         this.removeOnesieButton = page.locator('[data-test="remove-sauce-labs-onesie"]')
         this.removeTestAllThingsTShirtButton = page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')




    }
}