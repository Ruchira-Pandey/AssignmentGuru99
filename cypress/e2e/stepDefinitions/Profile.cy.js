

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProfilePage from "../PageObject/ProfilePage";


Given('user click Profile button', () => {
    ProfilePage.profileButton();
    
}) 

Given('user click on Edit Profile button', ()=> {
    ProfilePage.editProfileButton();
})


When('edit details', () => {
    ProfilePage.editDetails();
})

Then('user click the Update button', () => {
    ProfilePage.clickUpdateButton();
})
