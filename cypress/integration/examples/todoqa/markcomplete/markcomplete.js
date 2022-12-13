import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


var taskListvar;

Given('User on todo application', () =>
{
    cy.visit('https://todo.scriveqa.com/')
})


When('user add multiple tasks', (taskList)=> {

    taskListvar = taskList

    taskList.hashes().forEach(element => {
        cy.get('.form-control')
            .type(element.Taskname)
            .type('{enter}')        
    });
    
})

And('User click on checkbox of task {string} and {string} and leave {string}', (task2, task3, task1)=> {
    cy.get('.checkbox label').contains(task2).click()

    cy.get('.checkbox label').contains(task3).click()
    // cy.get('input[type="checkbox"]').should('be.checked')
    // cy.get('input[type="checkbox"]').contains(task1).should('not.be.checked')

})

And('Task {string} and {string} should be shown in {string} filter', (task2, task3, filter)=> {

    cy.get('.filters li:nth-child(3)').click()
    cy.get('.checkbox label').contains(task2).should('contains.text',task2)

    cy.get('.filters li:nth-child(3)').click()
    cy.get('.checkbox label').contains(task3).should('contains.text',task3)



})