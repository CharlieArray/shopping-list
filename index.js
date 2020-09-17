$(function() {

    //permanently remove items from the list//
    $('.shopping-item-delete').on('click', function(event) {
        event.preventDefault();
        $(this).closest("li").remove("li");
    }); 

    //check and uncheck items on the list by clicking the "Check" button//
    $(".shopping-item-toggle").on('click', function(event) {
        event.preventDefault();
      $(this).closest("li").toggleClass("shopping-item__checked");
    });
    
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        const userTextElement = $("#shopping-list-entry").val();
        $(".shopping-list").append(                   
            "<li><p>" + userTextElement + "</p></li>");
    }); 
});



/*css class to strike through checked items//
.shopping-item__checked 

$("this").toggleClass("shopping-item__checked")
$(event.currentTarget).toggleClass("shopping-item__checked");

*/




/*class of item
.shopping-item
*/


/*

To complete this challenge requires:

    -Linking to your application JavaScript file from the index.html page.

    -Using this and event delegation

Requirements

In terms of user experience, your shopping list app must allow users to:

    -enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
      
    -check and uncheck items on the list by clicking the "Check" button

    -permanently remove items from the list

Additionally:

     -Write JavaScript code that works with the existing HTML and CSS to implement the required features.
    -Hint: you may find it helpful to read up on and use the following jQuery
    methods: 
    
    .submit() Trigger the submit event for the selected elements 
    .preventDefault()
    DONE .toggleClass()
    DONE .closest().

When you're done, push your work up to GitHub and publish it on GitHub Pages. Submit a link to your repo below.
*/