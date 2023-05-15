# AutomationTestStore
This Repo contains the sample BDD framework created for automation test store website using selenium JS. Let us go through each folder structure in detail.

## hooks.js

This file contains the necessary hooks required to run the scripts. Before hooks is used to launch and maximize the Webpage and Ater hooks is when the test execution is complete and it closes the session started by the webdriver.

## Feature File

1. Feature file (login.feature) is present under features folder and it contains two scenarios.
2. Scenario 1 is for registering a new user and logging in with the newly created credentails.
3. Scenario 2 is to login to the app and complete the checkout for the selected product. (End to End Validation)

## step-definitions

This folder is present under features and it contains the step definition for the feature file and it only contains method call from page method classes within  the feature step.

## pagemethods

This folder is present inside features and it contains the sample POM for login and product pages. I have used CJS for referring the page objects and test data from the resective folders.

## pageobjects

This folder is also present under features and it contains all the locators specific to the page(Login and Product). Here I have used locators such as css and xpath for finding the elements.

## Utils
 
 Under utils folder test data is maintained in JSON format and by using CJS import we can utilze those data inside our code. Also for register new used scenario I have used random value create function to generate a new value everytime it runs and finally storing it in a variable fo further use.
 
 ## allure-report and allure-results
 
  These folders will get generated after every test execution in json and html format respectively.
  
  ## wdio.conf.js
  
   It is a configuration file maintains all the run time values which gets stored in json format.
   
   ## package.json
   
    Along with the plugins, the required scripts also can be stored in this file. Let us see some of the scripts used in our code.
    
    "test": "wdio wdio.conf.js"
    
    npm run test will trigger the run and finally the execution results will get stored in allure-results folder in json format.
    
    "allure-reports": "node_modules/.bin/allure generate ./reports/allure/allure-results/  -o ./reports/allure/allure-report/ --clean && allure open ./reports/allure/allure-report"
    
    nm run allure-reports will save the allure report in the html format.
    
   ## Archive
    
    Finally archive folder contains the same test cases without bdd format/proper framework structure.
