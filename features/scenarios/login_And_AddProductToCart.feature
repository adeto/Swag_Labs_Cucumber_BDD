Feature: Log in and add Product to the Cart
   As a user, I should be able to log in and to add a specific product - "Sauce Labs Fleece Jacket" to the cart.

   Background: Log in the "Swag Labs" website
      Given visits "Swag Labs" home page
      * user enters existing username
      * user enters a valid password
      * user clicks on the "Login" button
      
@add_Product
   Scenario: Add a specifi product - "Sauce Labs Fleece Jacket" to the cart
      When the user is on "Product" page
      * user finds the product "Sauce Labs Fleece Jacket"
      * user clicks on "Add to cart" button
      Then the product is added to the cart
      * user verifies that the "Sauce Labs Fleece Jacket" is present on the cart screen