
const { Given, When, Then, BeforeAll, Before, After, AfterAll } = require('@wdio/cucumber-framework');
const { Builder, Capabilities, By, Key, until } = require("selenium-webdriver")

// Create a new WebDriver instance
const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

    
// Define a BeforeAll hook to run once before all scenarios
BeforeAll(async () => {

    // Set up any necessary resources before the tests start
    await driver.manage().window().maximize();
    allure.addFeature('Product Login');
    allure.addSeverity('Critical');


});

// Define a Before hook to run before each scenario
Before(async () => {
    // Set up any necessary test data or browser configuration
    await driver.get("https://automationteststore.com/");

    var title = await driver.getTitle();
    allure.addStep('Verify Title');
    await driver.wait(until.titleIs(title), 1000);
    expect(title).to.eq("A place to practice your automation skills!")
    console.log("the title is : " + title)
});


// Define an After hook to run after each scenario
After(async (scenarioResult) => {
    // Take a screenshot if the scenario failed
    if (scenarioResult.result.status === 'failed') {
        await driver.takeScreenshot().then((data) => {
            const screenshot = data.replace(/^data:image\/png;base64,/, '');
            scenarioResult.attach(screenshot, 'image/png');
        });
    }
});

// Define an AfterAll hook to run once after all scenarios
AfterAll(async () => {
    // Clean up any resources after the tests have finished
    await driver.quit();
});


module.exports = driver;