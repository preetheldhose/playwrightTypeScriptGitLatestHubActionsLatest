import { expect, test } from "@playwright/test";

test.only("Interaction with inputs", async ({ page }) => {
    await page.goto("https://lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message")
    console.log('Before entering data: ' + await messageInput.inputValue());
    await messageInput.type("hi there");
    console.log('After entering data: ' + await messageInput.inputValue())
})