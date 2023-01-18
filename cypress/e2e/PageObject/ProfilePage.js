class RetriveQuotationPage {

    static profileButton() {
        cy.get('#ui-id-4').click();
    }

    static editProfileButton() {
        cy.get('#ui-id-5').click();
    }

     static editDetails() {
        cy.get('#user_title').select('Mrs');
        cy.get('#user_surname').type('pandey');
        cy.get('#user_firstname').type('Ruchira');
        cy.get('#user_phone').type('8958472106');
        cy.get('#user_dateofbirth_1i').select('1986');
        cy.get('#user_dateofbirth_2i').select('March');
        cy.get('#user_dateofbirth_3i').select('7');
        cy.get('#user_licencetype_f').click();
        cy.get('#user_occupation_id').select('Doctor');
        cy.get('#user_address_attributes_street').type('Amravati Colony');
        cy.get('#user_address_attributes_city').type('Haldwani');
        cy.get('#user_address_attributes_county').type('India');
        cy.get('#user_address_attributes_postcode').type('263139');
    
        
     }

     static clickUpdateButton() {
        cy.get('#edit_user_ > .actions > .btn').click();

        //Exceptio handeled
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
     }

}

export default RetriveQuotationPage;