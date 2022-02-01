const {By, until} = require('selenium-webdriver');

module.exports = {
    findElementById: function(driver, id) {
        return driver.findElement(By.id(id));
    },
    findElementByXPath: function(driver, xpath) {
        return driver.findElement(By.xpath(xpath));
    },
    elementLocated: function(driver, xpath) {
        return driver.wait(until.elementLocated(By.xpath(xpath)));
    }
};
