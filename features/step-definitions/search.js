
const { Given, When, Then, BeforeAll, Before, After, AfterAll } = require('@wdio/cucumber-framework');
const { Builder, Capabilities, By, Key, until, Select, webdriver } = require("selenium-webdriver")
const { default: allure } = require('@wdio/allure-reporter');
var chai = require('chai');
var expect = chai.expect;    // Using Expect style
var driver = require('../hooks');
var testPage = require('../pageobjects/page');
const loginPage = require('../pageobjects/login.page');


Given('Login to the application', async () => {
    loginPage.loginPageMethod()
})


Given('Login to the application with the created user and logoff finally', async () => {
    loginPage.loginPageMethod()
    loginPage.logoffPageMethod()
})

When('Add an item and complete payment', async () => {
    testPage.searchAnItem()
    testPage.addToCart()
    testPage.completePayment()
})

Then('Validate payment and order status', async () => {
    testPage.validatePaymentStatus()
})

Given('Launch the application', async () => {
    loginPage.applLaunch()
})

When('Register an user for the first time', async () => {
    loginPage.registerUser()

    //logoff
    loginPage.logoffPageMethod()
})