import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/loginPageObject.test.ts"],
  use: {
    headless: false, // Run in headed mode
    browserName: 'chromium', // Change to 'firefox' or 'webkit' if needed
    video: 'on', // Enable video recording for all tests
    trace: 'on', // Enable tracing for debugging
    screenshot: 'on', // Capture screenshot on failure
  },
  reporter: [["dot"],["json",{
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "never"
  }]]
};

export default config;