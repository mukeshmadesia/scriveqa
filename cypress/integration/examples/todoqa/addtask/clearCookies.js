const { Before,} = require("cypress-cucumber-preprocessor/steps");

beforeEach(()=> {

    cy.log('beforEach updated')
    cy.clearCookies()
})