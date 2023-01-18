
Feature: Request Quotation Page

  Scenario Outline: User want to login Guru99 URL and sucessfully logged in
    Given User navigate to the website
    When enter valid usernsme and password
    Then click on login button
    Then verify user should redirect to homepage
    
   

   Scenario:  Submit the Request Quotation page
    Given user click Request Quotation button
    When enter all the details
    Then  user click the save button
    

