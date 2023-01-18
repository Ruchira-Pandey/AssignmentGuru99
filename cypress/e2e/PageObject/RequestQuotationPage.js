class RequestQuotationPage {

    static requestQuotationButton() {
        cy.xpath("//a[@id='ui-id-2']").click().wait(3000);
    }

static enterDetails() {
    
    cy.get('#quotation_breakdowncover').select('At home');
    cy.get('#quotation_incidents').type('incidents');
    cy.get('#quotation_vehicle_attributes_registration').type('registration');
    cy.get('#quotation_vehicle_attributes_mileage').type('annual');
    cy.get('#quotation_vehicle_attributes_value').type('estimate');
    cy.get('#quotation_vehicle_attributes_parkinglocation').select('Locked Garage');
    cy.get('#quotation_vehicle_attributes_policystart_1i').select('2015');
    cy.get('#quotation_vehicle_attributes_policystart_2i').select('March');
    cy.get('#quotation_vehicle_attributes_policystart_3i').select('2');
}

static saveButton() {
    cy.get('#new_quotation > .actions > .btn-success').click();
}

}

export default RequestQuotationPage;