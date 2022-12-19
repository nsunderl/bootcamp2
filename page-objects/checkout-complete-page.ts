import  { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
    //data modifiers
    readonly page: Page
    readonly cartIcon: Locator
    readonly backHomeButton: Locator
    readonly orderComplete: Locator
    readonly orderThankYou: Locator
    readonly orderPonyExpress: Locator



    constructor(page: Page) {
        this.page = page
        this.cartIcon = page.locator('[class="shopping_cart_link"]')
        this.backHomeButton = page.locator('[data-test="back-to-products"]')
        this.orderComplete = page.getByText('Checkout: Complete!')
        this.orderThankYou = page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })
        this.orderPonyExpress = page.getByRole('img', { name: 'Pony Express' })
    }
}