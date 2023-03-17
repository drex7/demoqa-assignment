const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  chromeWebSecurity: false,
  // pageLoadTimeout:
  e2e: {
    baseUrl: 'https://demoqa.com',
    pageLoadTimeout: 9000,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile })
      on('task', verifyDownloadTasks)
    },
  },
});