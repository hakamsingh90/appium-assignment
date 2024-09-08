Feature: the saucelab login app test 

	Scenario Outline: As a user, I want to test login functionality with invalid different data sets 
        Given user is on the login page
        When user login with <username> and <password> and click on login button
        Then verify user should see <errorMessage> 
  
  Examples:
  | username | password | errorMessage |
  | alice@example.com | 10203040| Username and password do not match any user in this service. |
  | 1@2.com | f-o-o| Username and password do not match any user in this service. |
  |  |  | Username is required |
  | bob@example.com |  | Password is required |
  | bobe@example.com| 10203040 | Username and password do not match any user in this service. |