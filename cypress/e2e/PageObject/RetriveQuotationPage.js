class RetriveQuotationPage {

    static retriveQuotationButton() {
        cy.get('#ui-id-3').click().wait(3000);
    }

    static enterCode() {
        cy.get('form > [type="text"]').type('20462');
    }

     static retrivebutton() {
        cy.get('#getquote').click();
     }

     static verifyUrl() {
        cy.url().should('include', '/insurance/v1/retrieve_quotation.php');
     }

}

export default RetriveQuotationPage;