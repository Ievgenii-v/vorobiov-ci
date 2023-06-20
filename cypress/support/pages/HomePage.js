class HomePage {
    visit(){
        cy.log('Open website home page');
        cy.visit('https://automationteststore.com/');
    }

    getLoginOrRegisterButton(){
        return cy.contains('a', 'Login or register');
    }

    getHomeTab(){
        return cy.get('a', 'Login or register');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }
}
export default new HomePage();