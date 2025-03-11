import { expect, test } from "@playwright/test";
import { LoginClass } from '../pageObject/login.control';

let loginAccess: LoginClass

test.beforeEach(async ({ page }) => {
    loginAccess = new LoginClass(page)

    await loginAccess.gotoURL();
})

test.afterEach('Closing browser', async ({ page }) => {
    await page.close();
})

test ("Login demo test", async () => {
    await loginAccess.loginHandler();
})