import { expect, test } from "@playwright/test";

test("iFrame test", async ({ page }) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No of iFrames: " + allframes.length);

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Koushik");
    await frame.locator("input[name='lname']").fill("Chatterjee");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']")
    await innerFrame.locator("input[name='email']").fill("kpushik@gmail.com")

    await frame.locator("input[name='fname']").fill("letcode");
})

