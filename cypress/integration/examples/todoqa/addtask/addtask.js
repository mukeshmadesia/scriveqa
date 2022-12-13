import {And, Given, When } from "cypress-cucumber-preprocessor/steps";

let taskname = 'E2E_ADD_Single_Task';

var taskoutput;
var taskListvar;

Given('User on todo application', () =>
{
    cy.visit('https://todo.scriveqa.com/')
})

When('user type task on Add bar', ()=> {

    cy.get('.form-control')
    .type(taskname)
})

And('user press Enter key', ()=> {

    cy.get('.form-control')
    .type('{enter}')
})


Then('A new task is added', ()=> {

     //cy.get('.checkbox label').should('have.text',taskname)
                
     cy.get('.checkbox label').invoke('text').then((text) =>
     
     {
        taskoutput = text
     })
    
})


Then('New task is same as enter by user', ()=> {
    //cy.get('label > input')
    expect(taskoutput).to.contain(taskname)
})
//It seems you found a bug.


When('user add multiple tasks', (taskList)=> {

    taskListvar = taskList

    taskList.hashes().forEach(element => {
        cy.get('.form-control')
            .type(element.Taskname)
            .type('{enter}')        
    });
    
})

Then('All new tasks are added', ()=> {
    
    taskListvar.hashes().forEach(element => {
        
        //cy.get('.checkbox label').contains(element.Taskname)
        cy.get('.checkbox label').contains(element.Taskname).should('contain.text',element.Taskname)
    });
})

And('items count is {string}', (itemCount)=>{
    cy.get('.clearfix div:nth-child(2)').should('have.text',itemCount)
})



