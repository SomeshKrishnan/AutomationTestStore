//This page contains test cases which ran without bdd framework

const { Builder, By, Key, until, Select } = require("selenium-webdriver")
var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style
var un = 'simonKatich'




async function validateTitle() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://automationteststore.com/");
    var title = await driver.getTitle();

    await driver.wait(until.titleIs(title), 1000);
    console.log("the title is : " + title)
    await driver.quit();
}

async function loginFunc() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {

        await driver.get("https://automationteststore.com/");

        var title = await driver.getTitle();

        await driver.wait(until.titleIs(title), 1000);
        expect(title).to.eq("A place to practice your automation skills!")
        console.log("the title is : " + title)
        await driver.manage().window().maximize()

        await driver.findElement(By.xpath("//a[text()='Login or register']")).click()
        var existUser = (await driver.findElement(By.css("div.returncustomer h2.heading2")).getText()).toUpperCase()
        console.log("the text is : " + existUser)
        expect(existUser).to.eq("RETURNING CUSTOMER")

        var e = driver.findElement(By.xpath("//*[text()='I am a returning customer.']")).isDisplayed();
        if (e) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }

        await driver.findElement(By.css("#loginFrm_loginname")).sendKeys(un)

        await driver.findElement(By.css("#loginFrm_password")).sendKeys('SachinTendulkar@21!')

        await driver.findElement(By.css("[title='Login']")).click()
        var userName = (await driver.findElement(By.css("span.subtext")).getText())
        console.log("the text is : " + userName)
        expect(userName).to.eq(un)

    } finally {
        await driver.quit();
    }
}

async function addToCheckOut() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("https://automationteststore.com/");

        var title = await driver.getTitle();

        await driver.wait(until.titleIs(title), 1000);
        expect(title).to.eq("A place to practice your automation skills!")
        console.log("the title is : " + title)
        await driver.manage().window().maximize()

        await driver.findElement(By.xpath("//a[text()='Login or register']")).click()
        var existUser = (await driver.findElement(By.css("div.returncustomer h2.heading2")).getText()).toUpperCase()
        console.log("the text is : " + existUser)
        expect(existUser).to.eq("RETURNING CUSTOMER")

        var e = driver.findElement(By.xpath("//*[text()='I am a returning customer.']")).isDisplayed();
        if (e) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }

        await driver.findElement(By.css("#loginFrm_loginname")).sendKeys(un)

        await driver.findElement(By.css("#loginFrm_password")).sendKeys('SachinTendulkar@21!')

        await driver.findElement(By.css("[title='Login']")).click()
        var userName = (await driver.findElement(By.css("span.subtext")).getText())
        console.log("the text is : " + userName)
        expect(userName).to.eq(un)

        await driver.findElement(By.css("a.active.menu_home")).click()
        await driver.sleep(3000)
        const mveoEle = await driver.findElement(By.css("#featured [title='Skinsheen Bronzer Stick']"))

        await driver.actions().scroll(0, -50, 0, 200, mveoEle).perform()
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.sleep(2000)
        await mveoEle.click()

        const prodInfo = await driver.findElement(By.css("div.wishlist"))
        await driver.actions().scroll(0, -50, 0, 200, prodInfo).perform()
        await driver.sleep(2000)
        await driver.findElement(By.css("ul.productpagecart")).click()
        await driver.sleep(2000)
        var gridProductCheck = await driver.findElement(By.css("table > tbody > tr:nth-child(2) > td:nth-child(2) > a")).getText()
        console.log("the text is : " + gridProductCheck)
        expect(gridProductCheck).to.eq("Skinsheen Bronzer Stick")
        await driver.sleep(4000)
        await driver.findElement(By.css("#cart_checkout1")).click()

        var mainText = (await driver.findElement(By.css("span.maintext")).getText()).toUpperCase()
        console.log("the mainText text is : " + mainText)
        expect(mainText).to.eq("CHECKOUT CONFIRMATION")

        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.findElement(By.css("#checkout_btn")).click()
        await driver.sleep(4000)




        var f = driver.findElement(By.xpath("//*[text()='Thank you for shopping with us!']")).isDisplayed();
        if (f) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }

        var orderCreation = (await driver.findElement(By.css("ul.breadcrumb > li:nth-child(6) > a")).getText())
        console.log("the orderCreation text is : " + orderCreation)
        expect(orderCreation).to.contain("Success")
    } finally {
        await driver.quit();
        
    }
}

async function registerUser() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {

        await driver.get("https://automationteststore.com/");

        var title = await driver.getTitle();

        await driver.wait(until.titleIs(title), 1000);
        expect(title).to.eq("A place to practice your automation skills!")
        console.log("the title is : " + title)
        await driver.manage().window().maximize()

        await driver.findElement(By.xpath("//a[text()='Login or register']")).click()

        var text = await driver.findElement(By.xpath("//*[@id='maincontainer']//h1/span[1]")).getText()
        console.log("the text is : " + text)
        expect(text).to.eq("ACCOUNT LOGIN")

        var text2 = (await driver.findElement(By.xpath("//*[@id='maincontainer']//div[1]/h2")).getText()).toUpperCase()
        console.log("the text is : " + text2)
        expect(text2).to.eq("I AM A NEW CUSTOMER.")

        var registerCheckBox = await driver.findElement(By.css("#accountFrm_accountregister")).isSelected()
        console.log("Is the box is selected : " + registerCheckBox)
        expect(registerCheckBox).to.eq(true)

        await driver.findElement(By.css("[title='Continue']")).click()

        var createAccountHdr = (await driver.findElement(By.xpath("//*[@id='maincontainer']//h1/span[1]")).getText()).toUpperCase()
        console.log("the text is : " + createAccountHdr)
        expect(createAccountHdr).to.eq("CREATE ACCOUNT")

        await driver.findElement(By.css("#AccountFrm_firstname")).sendKeys(un)
        await driver.findElement(By.css("#AccountFrm_lastname")).sendKeys('shenbagam')
        await driver.findElement(By.css("#AccountFrm_email")).sendKeys(un + '@gmail.com')
        await driver.findElement(By.css("#AccountFrm_address_1")).sendKeys('25,West Cross St')
        await driver.findElement(By.css("#AccountFrm_city")).sendKeys('California')

        const selectElement = await driver.findElement(By.css('#AccountFrm_zone_id'))
        const sel = new Select(selectElement);

        await sel.selectByVisibleText('Newport')
        await driver.findElement(By.css("#AccountFrm_postcode")).sendKeys('458985')
        await driver.findElement(By.css("#AccountFrm_loginname")).sendKeys(un)
        await driver.findElement(By.css("#AccountFrm_password")).sendKeys('SachinTendulkar@21!')
        await driver.findElement(By.css("#AccountFrm_confirm")).sendKeys('SachinTendulkar@21!')

        await driver.findElement(By.css("[for='AccountFrm_newsletter1'] input")).click()
        await driver.findElement(By.css("#AccountFrm_agree")).click()
        await driver.findElement(By.css("div.form-group button.btn-orange")).click()

        var accountCreation = (await driver.findElement(By.xpath("//*[@id='maincontainer']//h1/span[1]")).getText()).toUpperCase()
        console.log("the text is : " + accountCreation)
        expect(accountCreation).to.eq("YOUR ACCOUNT HAS BEEN CREATED!")

        var t = driver.findElement(By.xpath("//*[text()='Congratulations! Your new account has been successfully created!']")).isDisplayed();
        if (t) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }

        var myAccountHdr = (await driver.findElement(By.css(".heading2 span")).getText()).toUpperCase()
        console.log("the text is : " + myAccountHdr)
        expect(myAccountHdr).to.eq("MY ACCOUNT")



        await driver.findElement(By.css("[title='Continue']")).click()
        var userName = (await driver.findElement(By.css("span.subtext")).getText())
        console.log("the text is : " + userName)
        expect(userName).to.eq(un)

        await driver.findElement(By.css("ul.side_account_list li:nth-child(10) a")).click()

        var accLogout = (await driver.findElement(By.css("span.maintext")).getText())
        console.log("the text is : " + accLogout)
        expect(accLogout).to.eq("ACCOUNT LOGOUT")

        var l = driver.findElement(By.xpath("//*[text()='You have been logged off your account. It is now safe to leave the computer.']")).isDisplayed();
        if (l) {
            console.log("Element is displayed");
        } else {
            console.log("Element is not displayed");
        }

    } finally {
        // await driver.quit();
    }



}


addToCheckOut()