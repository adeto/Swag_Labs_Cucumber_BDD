const webdriver = require('selenium-webdriver');

/**
 * Creates a Selenium WebDriver using chrome as the browser
 * @returns {ThenableWebDriver} selenium webdriver
 */

module.exports = async function() {
    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    return driver;
};
