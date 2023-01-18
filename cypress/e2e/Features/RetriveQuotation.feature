
Feature: Request Quotation Page

 Scenario Outline: User want to login Guru99 URL and sucessfully logged in
    Given User navigate to the website
    When enter valid usernsme and password
    Then click on login button
    Then verify user should redirect to homepage
    

   Scenario:  Submit the Retrive Quotation page
    Given user click Retrive Quotation button
    When enter identification number
    Then  user click the retrive button
    Then verify url for retrive quotation
    

