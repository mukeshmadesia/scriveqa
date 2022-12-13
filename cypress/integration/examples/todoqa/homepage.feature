Feature: Home page content
    Verify visual content of homepage

Scenario: Home page visual content
    When User on todo application
    Then heading is displayed as 'Todos'
    And text in bar is 'Add new'
    And An alert text is 'There are no items.'
    And filter has 'All', 'Active', 'Completed', 'Clear completed'
    And Info has text 'Press `Esc` to cancel.' 