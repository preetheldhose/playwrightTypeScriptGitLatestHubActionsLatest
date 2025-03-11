import { chromium, test } from "@playwright/test"

test ("Login demo test", async () => {

    const browser = await chromium.launch({
        //headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.click("'Login'")

    await page.fill("input[name='email']", "koushik350@gmail.com")
    await page.fill("input[name='password']", "Pass123$")
    await page.click("input[value='Login']");

    await page.waitForTimeout(5000);

    const newContext = await browser.newContext()
    const newPage = await context.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
    await newPage.waitForTimeout(5000);
    
})