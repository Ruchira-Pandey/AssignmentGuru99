/// <reference types = "cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LogoutPage from "../PageObject/LogoutPage";


Then('user click the logout button', ()=> {
    LogoutPage.loggingOut();
})

Then('verify user should redirect to login page', ()=> {
    LogoutPage.redirectTologinPage();
})

