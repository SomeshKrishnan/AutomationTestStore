Feature: The Automation Test Store Website


    Scenario: Validate Register User and Login
        Given Launch the application
        When Register an user for the first time
        Then Login to the application with the created user and logoff finally
    
    Scenario: Validate End to End Check
        Given Login to the application
        When Add an item and complete payment
        Then Validate payment and order status