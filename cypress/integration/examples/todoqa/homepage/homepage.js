import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('User on todo application', () =>
{
    cy.visit('https://todo.scriveqa.com/')
})

Then('heading is displayed as {string}', (heading)=> {

    cy.get('h1').should('have.text',heading)
})

Then('text in bar is {string}', (addText)=> {

    cy.get('.form-control').invoke('attr','placeholder').should('eq',addText)
})

And('An alert text is {string}', (alertText) => {
    cy.get('p.alert').should('have.text', alertText)
})
And('filter has {string}, {string}, {string}, {string}', (all, active, completed, clearCompleted)=>{
    cy.get('.filters li:nth-child(1)').should('have.text',all)
    cy.get('.filters li:nth-child(2)').should('have.text',active)
    cy.get('.filters li:nth-child(3)').should('have.text',completed)
    cy.get('.filters li:nth-child(4)').should('have.text',clearCompleted)
})

And('Info has text {string}',(infoText)=>{
    cy.get('p.info').should('have.text',infoText)
})