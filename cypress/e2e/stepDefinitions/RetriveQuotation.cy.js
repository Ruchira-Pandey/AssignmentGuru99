

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RetriveQuotation from "../PageObject/RetriveQuotationPage";


Given('user click Retrive Quotation button', () => {
    RetriveQuotation.retriveQuotationButton();
}) 

When('enter identification number', () => {
    RetriveQuotation.enterCode();
})

Then('user click the retrive button', () => {
    RetriveQuotation.retrivebutton();
})

Then('verify url for retrive quotation', () => {
    RetriveQuotation.verifyUrl();
})