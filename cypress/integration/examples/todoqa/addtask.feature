Feature: Add Todo Task
    Try to add one or many new tasks by typing in Box

Scenario: Add new task by text box
    Given User on todo application
    When user type task on Add bar
        And user press Enter key
    Then A new task is added
        And New task is same as enter by user


Scenario: Add multiple task by text box
    Given User on todo application
    When user add multiple tasks
    |Taskname|
    |E2E Test Task1|
    |E2E Test Task2|
    |E2E Test Task3|
    Then All new tasks are added
    And items count is '3 items'
        