import  { Page, Locator } from '@playwright/test';

export class LoginPage {
    //data modifiers
    readonly page: Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator
    readonly errorDialog: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameField = page.locator('[data-test="username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.errorDialog = page.locator('[data-test="error"]')

    }
}