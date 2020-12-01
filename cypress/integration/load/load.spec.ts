export const selectors = {
  homeLink: '[data-test="home-link"]',    
  // Auth component classes
  // usernameInput: '[data-test="username-input"]',
  // signInPasswordInput: '[data-test="sign-in-password-input"]',
  // signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  // signOutButton: '[data-test="sign-out-button"]'
};

describe('page loads:', () => {
  // Step 1: setup the application state
  beforeEach(() => {
    cy.visit('/');
  });
    
  describe('Home page:', () => {
    it('home page loads', () => {
      cy.get(selectors.homeLink).contains('prodev.live');
    });
    it('home page shows creators', () => {
      cy.get('h2').contains('Creators');
    });
  });



  // describe('Sign In:', () => {
  //     it('allows a user to signin', () => {
  //         // Step 2: Take an action (Sign in)
  //         cy.get(selectors.usernameInput).type("DUMMY_USERNAME");
  //         cy.get(selectors.signInPasswordInput).type("DUMMY_PASSWORD");
  //         cy.get(selectors.signInSignInButton).contains('Sign In').click();

  //         // Step 3: Make an assertion (Check for sign-out text)
  //         cy.get(selectors.signOutButton).contains('Sign Out');
  //     });
  // });
  
});