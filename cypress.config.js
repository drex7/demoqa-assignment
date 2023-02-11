const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    // pageLoadTimeout: 90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile })
      on('task', verifyDownloadTasks )
    },
  },
});