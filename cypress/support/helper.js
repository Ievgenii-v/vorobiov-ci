export function login(qweqwe) {
	cy.log('Open website login page');
	cy.visit('/index.php?rt=account/login');

	cy.log('Check user is unauthorized');
	cy.getCookie('customer').should('be.null');

	cy.log('Authorize user');
	cy.get('#loginFrm_loginname').type(qweqwe.username);
	cy.get('#loginFrm_password').type(qweqwe.password);
	cy.get('button[type="submit"]').contains('Login').click();
}

export function findNewProd(productName) {
	cy.get('ul.pagination a').then((pages) => {
		for (let i = 1; i < pages.length; i++) {
			cy.location().then((location) => {
				if (!location.search.includes('product/product')) {
					cy.get('body').then((body) => {
						if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
							cy.get(`.prdocutname[title="${productName}"]`).click();
						} else {
							cy.get('ul.pagination a').contains('>').click();
						}
					});
				}
			});
		}
	});
}

export function findProduct(productName) {
	cy.get('body').then((body) => {
		if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
			cy.get(`.prdocutname[title="${productName}"]`).click();
		} else {
			cy.get('ul.pagination a').contains('>').click();
			findProduct(productName);
		}
	});
}

export function backgroundLogin(user) {
	cy.request('GET', '/index.php?rt=account/account').then((response) => {
		const body = Cypress.$(response.body);
		const csrftoken = body.find('input[name="csrftoken"]').val();
		const csrfinstance = body.find('input[name="csrfinstance"]').val();

		cy.request({
			method: 'POST',
			url: '/index.php?rt=account/login',
			form: true,
			body: {
				csrftoken: csrftoken,
				csrfinstance: csrfinstance,
				loginname: user.username,
				password: user.password,
			},
		});
	});
}
