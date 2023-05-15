

const { Builder, Capabilities, By, Key, until, Select, webdriver } = require("selenium-webdriver")
const { Severity } = require('allure-js-commons');
const { default: allure } = require('@wdio/allure-reporter');
var chai = require('chai');
var driver = require('../hooks');
var testData = require('../../Utils/testData.json');
var expect = chai.expect;    // Using Expect style
const pageElements = require("../pageobjects/page.json")


class Page {
    constructor(){}
    
    async searchAnItem() {
        
        await driver.findElement(By.css(pageElements.homeBtn)).click()
        await driver.sleep(3000)
        const mveoEle = await driver.findElement(By.css(pageElements.searchProduct))

        await driver.actions().scroll(0, -50, 0, 200, mveoEle).perform()
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.sleep(2000)
        await mveoEle.click()

        const prodInfo = await driver.findElement(By.css(pageElements.wishlist))
        await driver.actions().scroll(0, -50, 0, 200, prodInfo).perform()
    }

    async addToCart() {

        await driver.findElement(By.css(pageElements.addToCart)).click()
        await driver.sleep(2000)
        var gridProductCheck = await driver.findElement(By.css(pageElements.productCheck)).getText()
        console.log("the text is : " + gridProductCheck)
        expect(gridProductCheck).to.eq(testData.productName)
    }

    async completePayment() {
        await driver.findElement(By.css(pageElements.cartCheckout)).click()
        var mainText = (await driver.findElement(By.css(pageElements.mainText)).getText()).toUpperCase()
        console.log("the mainText text is : " + mainText)
        expect(mainText).to.eq("CHECKOUT CONFIRMATION")
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.findElement(By.css(pageElements.checkOutBtn)).click()
    }

    async validatePaymentStatus() {
        var f = driver.findElement(By.xpath(pageElements.successMsg)).isDisplayed();
        if (f) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }

        var orderCreation = (await driver.findElement(By.css(breadcrumbText)).getText())
        console.log("the orderCreation text is : " + orderCreation)
        expect(orderCreation).to.contain("Success")
    }
}

module.exports = new Page;