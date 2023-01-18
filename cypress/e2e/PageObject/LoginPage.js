class LoginPage {

    static URL() {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    }

     static validDetails() {
        // Enter email
        cy.xpath("//input[@id='email']").click().type('ruchirapunera3@gmail.com');
        // Enter Password
        cy.xpath("//input[@name='password']").click().type('Test@123');
    }

    static invalidDetails() {
        // Enter email
        cy.xpath("//input[@id='email']").click().type('rpunera3@gml.com');
        // Enter Password
        cy.xpath("//input[@name='password']").click().type('Test@124');
    }

    static loginbutton() {
        cy.contains('Log in').click({force: true});

        
        //Exceptio handeled
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    }

    static verifyHomepage() {

        //assertion
        cy.url().should('include', '/insurance/v1/header.php');
       
    }

    static errorMessage() {
        
        cy.xpath("//*[text()='Enter your Email address and password correct']").should("be.visible").and("have.text", 'Enter your Email address and password correct')
    }
}

export default LoginPage;