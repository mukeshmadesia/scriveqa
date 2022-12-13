Feature: Mark task complete

Scenario: Checked task should be shown as completed
  Given User on todo application
    When user add multiple tasks
    |Taskname|
    |E2E Test Task1|
    |E2E Test Task2|
    |E2E Test Task3|
    And User click on checkbox of task 'E2E Test Task2' and 'E2E Test Task3' and leave 'E2E Test Tas1'
    Then Task 'E2E Test Task2' and 'E2E Test Task3' should be shown in 'Completed' filter
  