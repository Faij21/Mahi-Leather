Feature:  Login functionality for a Mahi Leather.

@Smoke
Scenario: verify the login functionality with invalid Credentials.
Given I open Mahi Leather website.
When I click on Account option.
And I enter invalid Email and Password and click on Login button.
         | email              | password |
         | pavan123@gmail.com | asdf123  |

Then Verify the Incorrect email or password alert error.
And Verify the website is open or not.

@ProductSmoke
Scenario: Verify the place order details
Given I open Mahi Leather website.
When I click on satchels Collections.
And I add items to cart.
Then Validate the prices.

@Smoke2
Scenario: Verify the colors and warranty of product
Given I open Mahi Leather website.
When I click on satchels Collections. 
And I click on a product and Verify the warranty of a product.
Then verify the colors of a product.
