const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  video: false,
  e2e: {
    baseUrl: 'https://website.staging.mydaytrip.net/',
    specPattern: 'cypress/e2e/**/*.ts',
  },
});