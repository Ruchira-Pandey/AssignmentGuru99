class LogoutPage {

    static loggingOut() {

        cy.contains('Log out').click();
    }

    static redirectTologinPage() {

        cy.url().should('include', '/insurance/v1/index.php');
    }
}

export default LogoutPage;