import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import user from '../fixtures/user.json';
import { backgroundLogin, findProduct } from '../support/helper';

it('Authorization', { retries: 2 }, () => {
	homePage.visit();
	homePage.getLoginOrRegisterButton().click();
	loginPage.submitLoginForm(user.username, user.password);
});
// it.only('Authorization', { retries: 2 }, () => {

//   backgroundLogin
// 	homePage.visit();
// 	let b = cy.getCookie('AC_SF_8CEFDA09D5');
// 	cy.log('THIS COOK cyLOG =>' + cy.getCookie('AC_SF_8CEFDA09D5'));
// 	console.log('THIS COOK =>' + b);
// 	// console.log('THIS COOK JSON.stringify=>' + JSON.stringify(b));

// 	cy.getCookie('AC_SF_8CEFDA09D5').then((cookie) => {
// 		cy.setCookie('AC_SF_8CEFDA09D5', cookie.value)
// 	});
// });
it.only('Authorization', { retries: 2 }, () => {
	user.username = 'Josue.Brown50';
	user.password = 'TestPassword';
	homePage.visit();
	backgroundLogin(user);
	findProduct('Benefit Bella Bamba');
	// homePage.getLoginOrRegisterButton().click();
	// loginPage.submitLoginForm(user.username, user.password);
});
