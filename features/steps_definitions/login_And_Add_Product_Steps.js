const { Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(10 * 5000);
const assert = require('assert');
const {By} = require('selenium-webdriver');
const functions = require('../support_files/functions');
const username = "standard_user";
const password = "secret_sauce";

Given('visits "Swag Labs" home page', async function() {
    await this.driver.get('https://www.saucedemo.com/');
});

Given('user enters existing username', async function() {
    await functions.findElementById(this.driver, ('user-name')).sendKeys(username);
});

Given('user enters a valid password', async function() {
    await functions.findElementById(this.driver, ('password')).sendKeys(password);
});

Given('user clicks on the "Login" button', async function() {
    await functions.findElementById(this.driver, ('login-button')).click();
});

When('the user is on "Product" page', async function() {
    await functions.findElementByXPath(this.driver, ('//span[contains(text(),"Products")]'));
});

When('user finds the product "Sauce Labs Fleece Jacket"', async function() {
    await functions.elementLocated(this.driver, ('//div[@class="inventory_item_name"][contains(.,"Sauce Labs Fleece Jacket")]'));
});

When('user clicks on "Add to cart" button', async function() {
    await functions.elementLocated(this.driver, ('//button[@id="add-to-cart-sauce-labs-fleece-jacket"]'));
    await functions.findElementByXPath(this.driver, ('//button[@id="add-to-cart-sauce-labs-fleece-jacket"]')).click();
    await functions.elementLocated(this.driver, ('//button[@id="remove-sauce-labs-fleece-jacket"]'));
});

Then('the product is added to the cart', async function() {
    await functions.findElementByXPath(this.driver, ('//div[@class="inventory_item_name"][contains(.,"Sauce Labs Fleece Jacket")]'));
});

Then('user verifies that the "Sauce Labs Fleece Jacket" is present on the cart screen', async function() {
    await functions.findElementByXPath(this.driver, ('//span[@class="shopping_cart_badge"][contains(.,"1")]')).click();
    await functions.elementLocated(this.driver, ('//span[@class="title"]'));
    const productInTheCart = await this.driver.findElement(By.xpath('//div[@class="inventory_item_name"]')).getText();
    assert.equal(productInTheCart, 'Sauce Labs Fleece Jacket');
});
