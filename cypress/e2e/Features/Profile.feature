
Feature: Request Quotation Page

 Scenario Outline: User want to login Guru99 URL and sucessfully logged in
    Given User navigate to the website
    When enter valid usernsme and password
    Then click on login button
    Then verify user should redirect to homepage
    

   Scenario:  Verify Profile page
    Given user click Profile button

    Scenario:  Edit Profile page
    Given user click on Edit Profile button
    When edit details
    Then  user click the Update button
    
    

