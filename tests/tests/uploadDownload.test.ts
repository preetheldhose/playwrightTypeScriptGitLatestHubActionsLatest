import { test } from "@playwright/test";

test("Download files", async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("//textarea[@id='textbox']", "Like, Share, comment & subs");
    await page.click("id=create")
    await page.click("id=link-to-download")
    await page.waitForTimeout(3000)
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
    await download[0]

    const path = await download[0].path();
    console.log(path);
})

test.only("Upload files", async)