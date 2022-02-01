const { Before, After } = require('@cucumber/cucumber');
const chrome = require('../support_files/browser');
let driver;

Before(async function() {
    driver = await chrome();
    this.driver = driver; // push driver into the world
    await driver.manage().window().maximize(); // maximize the browser window
    return driver;
});

After(async function() {
    await this.driver.quit();
});
