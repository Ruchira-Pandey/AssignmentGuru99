Feature: Logout Page

     Scenario Outline: User logged in and logout from the application
    Given User navigate to the website
    When enter valid usernsme and password
    Then click on login button
    Then verify user should redirect to homepage

    Scenario Outline: logout
    Then user click the logout button
    Then verify user should redirect to login page
    
    

  

   