/// <reference types = "cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RequestQuotation from "../PageObject/RequestQuotationPage";

Given('user click Request Quotation button', () => {
    RequestQuotation.requestQuotationButton();
}) 

When('enter all the details', () => {
  RequestQuotation.enterDetails();
})

Then('user click the save button', () => {
   RequestQuotation.saveButton();
})

