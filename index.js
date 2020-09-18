$(function() {

    //enter items they need to purchase by entering text//
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        event.stopPropagation();
        const userTextElement = $("#shopping-list-entry").val();
        const textOutput = `<li><span class='shopping-item'>${userTextElement}</span>
        <div class='shopping-item-controls'>
          <button class='shopping-item-toggle'>
           <span class='button-label'>check</span>
         </button>
          <button class='shopping-item-delete'>
          <span class='button-label'>delete</span>
         </button>
        </div></li>`;
        $(".shopping-list").append(textOutput);
    }); 

    //permanently remove items from the list//
    $('div').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        $(this).closest("li").remove("li");
    }); 

    //check and uncheck items on the list by clicking the "Check" button//
    $(".shopping-item-toggle").on('click', function(event) {
        event.preventDefault();
      $(this).closest("li").toggleClass("shopping-item__checked");
    });
    
});




/*

To complete this challenge requires:

    -Linking to your application JavaScript file from the index.html page.

    -Using this and event delegation (COMPLETE)

Requirements

In terms of user experience, your shopping list app must allow users to:

    -enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
      
    -check and uncheck items on the list by clicking the "Check" button

    -permanently remove items from the list

Additionally:

     -Write JavaScript code that works with the existing HTML and CSS to implement the required features.
    -Hint: you may find it helpful to read up on and use the following jQuery
    methods: 
    
    DONE .submit() Trigger the submit event for the selected elements 
    DONE .preventDefault()
    DONE .toggleClass()
    DONE .closest().

When you're done, push your work up to GitHub and publish it on GitHub Pages. Submit a link to your repo below.
*/