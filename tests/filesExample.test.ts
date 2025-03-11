import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Download a file using Playwright', async ({ page }) => {
  await page.goto('https://www.sample-videos.com/download-sample-text-file.php'); // Replace with actual URL

  // Wait for the 'download' event when clicking the button
  const [download] = await Promise.all([
    page.waitForEvent('download'), // Waits for the download to start
    page.click('text=Download Sample Text File'), // Clicks the download button
  ]);

  // Save the downloaded file to a specific path
  const filePath = `downloads/${download.suggestedFilename()}`;
  await download.saveAs(filePath);

  console.log(`File downloaded to: ${filePath}`);

  // Check if the file exists
  expect(fs.existsSync(filePath)).toBeTruthy();
});
