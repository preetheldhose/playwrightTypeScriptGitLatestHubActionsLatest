import { expect, test } from "@playwright/test";

test("handling dropdown with label", async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        label: "Tuesday"
    })
    await page.waitForTimeout(3000);
})

test("handling dropdown with value", async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#select-demo", {
        value: "Friday"
    })
    await page.waitForTimeout(3000);
})

test("handling dropdown with index", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        index: 5
    })
    await page.waitForTimeout(3000);
})