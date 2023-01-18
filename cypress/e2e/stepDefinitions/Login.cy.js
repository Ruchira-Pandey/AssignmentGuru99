/// <reference types = "cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../PageObject/LoginPage";

Given('User navigate to the website', () => {
    LoginPage.URL();
}) 

 When('enter valid usernsme and password', ()=> {
    LoginPage.validDetails();
})

When('enter invalid usernsme and password', ()=> {
    LoginPage.invalidDetails();
})

Then('click on login button', () => {
    LoginPage.loginbutton();

   
})

Then('verify user should redirect to homepage', () => {
    LoginPage.verifyHomepage();
})

Then('verify error message', () => {
    LoginPage.errorMessage();
})