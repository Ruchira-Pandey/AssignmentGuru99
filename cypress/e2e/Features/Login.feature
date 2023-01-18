Feature: Login Page

     Scenario Outline: User want to login Guru99 URL and failed to login
    Given User navigate to the website
    When enter invalid usernsme and password
    Then click on login button
    Then verify error message

    Scenario Outline: User want to login Guru99 URL and sucessfully logged in
    Given User navigate to the website
    When enter valid usernsme and password
    Then click on login button
    Then verify user should redirect to homepage
    

   