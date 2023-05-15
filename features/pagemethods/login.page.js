
const { Builder, Capabilities, By, Key, until, Select, webdriver } = require("selenium-webdriver")
const { Severity } = require('allure-js-commons');
const { default: allure } = require('@wdio/allure-reporter');
var chai = require('chai');
var expect = chai.expect;    // Using Expect style
var driver = require('../hooks');
const Page = require('./page');
const loginElements = require("../pageobjects/login.json")
var testData = require('../../Utils/testData.json');

function generateName(length) {
    let genTxt = ''
    let genlength = 11
    var pattern = "abcdefghijklmnopqrstuvwxyz"
    if (length > 0) {
        genlength = length
    }
    for (var i = 0; i < genlength; i++) {
        genTxt += pattern.charAt(Math.floor(Math.random() * pattern.length))
    }
    return genTxt
}

var un = generateName()
console.log("The generated username : " + un)


class LoginPage{

    constructor() {}
    
    async applLaunch() {
        await driver.get(testData.baseURL);
        var title = await driver.getTitle();
        await driver.wait(until.titleIs(title), 1000);
        expect(title).to.eq("A place to practice your automation skills!")
        console.log("the title is : " + title)
        await driver.manage().window().maximize()
    }

    async registerUser() {
        await driver.findElement(By.xpath(loginElements.loginOrReg)).click()
        var text = await driver.findElement(By.xpath(loginElements.pageHeader)).getText()
        console.log("the text is : " + text)
        expect(text).to.eq("ACCOUNT LOGIN")

        var text2 = (await driver.findElement(By.xpath(loginElements.subHeader)).getText()).toUpperCase()
        console.log("the text is : " + text2)
        expect(text2).to.eq("I AM A NEW CUSTOMER.")

        var registerCheckBox = await driver.findElement(By.css(loginElements.accRegister)).isSelected()
        console.log("Is the box is selected : " + registerCheckBox)
        expect(registerCheckBox).to.eq(true)

        await driver.findElement(By.css(loginElements.continueBtn)).click()

        var createAccountHdr = (await driver.findElement(By.xpath(loginElements.pageHeader)).getText()).toUpperCase()
        console.log("the text is : " + createAccountHdr)
        expect(createAccountHdr).to.eq("CREATE ACCOUNT")

        await driver.findElement(By.css(loginElements.firstName)).sendKeys(un)
        await driver.findElement(By.css(loginElements.lastName)).sendKeys(testData.personalDetails[0])
        await driver.findElement(By.css(loginElements.email)).sendKeys(un + '@gmail.com')
        await driver.findElement(By.css(loginElements.address)).sendKeys(testData.personalDetails[1])
        await driver.findElement(By.css(loginElements.city)).sendKeys(testData.personalDetails[2])

        const selectElement = await driver.findElement(By.css(loginElements.zone))
        const sel = new Select(selectElement);

        await sel.selectByVisibleText('Newport')
        await driver.findElement(By.css(loginElements.postCode)).sendKeys(testData.personalDetails[3])
        await driver.findElement(By.css(loginElements.loginName)).sendKeys(un)
        await driver.findElement(By.css(loginElements.password)).sendKeys(testData.personalDetails[4])
        await driver.findElement(By.css(loginElements.confirmPwd)).sendKeys(testData.personalDetails[4])

        await driver.findElement(By.css(loginElements.subscribe)).click()
        await driver.findElement(By.css(loginElements.agree)).click()
        await driver.findElement(By.css(loginElements.createUser)).click()

        var accountCreation = (await driver.findElement(By.xpath(loginElements.pageHeader)).getText()).toUpperCase()
        console.log("the text is : " + accountCreation)
        expect(accountCreation).to.eq("YOUR ACCOUNT HAS BEEN CREATED!")

        var t = driver.findElement(By.xpath(loginElements.createUserCheck)).isDisplayed();
        if (t) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }

        var myAccountHdr = (await driver.findElement(By.css(loginElements.myUser)).getText()).toUpperCase()
        console.log("the text is : " + myAccountHdr)
        expect(myAccountHdr).to.eq("MY ACCOUNT")

        await driver.findElement(By.css(loginElements.continueBtn)).click()
        var userName = (await driver.findElement(By.css(loginElements.userName)).getText())
        console.log("the text is : " + userName)
        expect(userName).to.eq(un)
    }

    async loginPageMethod() {
        await driver.findElement(By.xpath(loginElements.loginOrReg)).click()
        var existUser = (await driver.findElement(By.css(loginElements.returningCustomer)).getText()).toUpperCase()
        console.log("the text is : " + existUser)
        expect(existUser).to.eq("RETURNING CUSTOMER")

        var e = driver.findElement(By.xpath(loginElements.loginBtn)).isDisplayed();
        if (e) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }
        allure.addStep('Login with an existing user');
        await driver.findElement(By.css(loginElements.login)).sendKeys(un)

        await driver.findElement(By.css(loginElements.pwd)).sendKeys(testData.personalDetails[4])

        await driver.findElement(By.css(loginElements.loginButn)).click()
        allure.addStep('verify login');
        var userName = (await driver.findElement(By.css(loginElements.subText)).getText())
        console.log("the text is : " + userName)
        expect(userName).to.eq(un)

        allure.addAttachment('Login to the website');
    }

    async logoffPageMethod() {
        
        await driver.findElement(By.css(loginElements.logOff)).click()

        var accLogout = (await driver.findElement(By.css(loginElements.mainText)).getText())
        console.log("the text is : " + accLogout)
        expect(accLogout).to.eq("ACCOUNT LOGOUT")

        var l = await driver.findElement(By.xpath(loginElements.logOffMsg)).isDisplayed();
        if (l) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }

        await driver.findElement(By.css(loginElements.continueBtn)).click()
    }

}

module.exports = new LoginPage;