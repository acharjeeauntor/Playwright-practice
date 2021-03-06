// @ts-check
// import { devices,PlaywrightTestConfig } from'@playwright/test'
const {devices,PlaywrightTestConfig} = require('@playwright/test')

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
 const config= {
   //fullyParallel:true,
timeout:900000,
  use: {
    //baseURL: 'https://demo.guru99.com/V4/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
  //grep: [new RegExp("@smokeTest")],
  //grepInvert: [new RegExp("@smokeTest")],
  //grep: [new RegExp("@smokeTest"), new RegExp("@fast")],
  workers:4,
  testMatch: 'visiual.test.js',

  /* Maximum time one test can run for. */

  expect: {


    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    //timeout: 600000
  
  },
  //testMatch: ['login.test.js'],

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'allure-playwright',
  reporter: 'html',
  //reporter: [['list'], ['json', { outputFile: "test-result.json" }], ['html', { open: "never" }]],


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      //fullyParallel:true,

      /* Project-specific settings. */
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },>

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};
//export default config
module.exports = config;
