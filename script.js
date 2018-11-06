$( document ).ready(function() {
 

// //only affects the heart the user clicks, not the ones to the left as well, like in a real rating counter.
// $('.heart').click(function(){
//   $(this).addClass('on');
// });

// //solves that problem by adding prevAll() prior to the addClass function.
// $('.heart').click(function(){
//   $(this).addClass('on');
//   $(this).prevAll().addClass('on');
// });

// .children([selector]) $("body").children() grabs children of each element

// .closest(selector) $("li.item").closest("ul") grab first element that matches selector by testing element itself, works through ancestors in the DOM Tree

// .find(selector) $("ul.list").find("li") grabs descendants of each element in current set of matched elements

// .next([selector]) $(this).next() get immediate next sibling of each element in set of matched elements. provides next sibling only if it matches the selector.

// .parent([selector]) $("li").parent() get parent of each element in set of matched elements.

// .prevUntil([selector])[,filter] $("this").prevUntil("ul") grabs all preceding siblings of each element up to element matched by the selector.

// .siblings([selector]) $(this).siblings(".on") grab siblings of each element in set of matched elements.

// //Comparing JS to jJQuery with syntax.
// Create an element
// JS                                                jQuery
// document.createElement('p');                  $('<p></p>');
// document.getElementById("footer").innerHTML   $("#footer").append += "<p>Bye</p>";                              ("<p>Bye</p>");

// removing an item when trash icon is clicked.
// $(".fa").on("click",function() {
//   $(this).parent().remove();
// });

//adding an item when add task button is clicked.
// $(".btn").on("click", function() {
//   let newTask = prompt("Add new task");
//   let formattedTask = ("<li><span>" + newTask + "</span<i class =\"fa fa-trash-o\" aria-hidden=\"true\"></i> </li>);
//   $( "#task-list" ).append( formattedTask );
// });



// to-do list actions, great actions to modify items on a page, like an online shopping cart or a to do list.

// - append(content[,content]) - insert content, to end of element in set of matched elements. $("h1").append("Hello")

// .html() - get/set html msContentScript. $(".footer").html('<p> text change </p>');

// .prepend() like append, but inserts the content to the beginning of each element. $(".inner").prepend("<p>Test</p>");

// .empty() removes all child nodes of set matched elements, keeps the element that calls it. $(this).parent().empty();

//EFFECTS Hide and Show
// function that calls when complete, last part. deals with display of the element.
// $("selector").hide([duration ms][,complete]);
// $(".hideMe").hide([2000] );

// $("#shadow").hide([5000] );

// $(".hideMe").show([1000] );
// $("#shadow").show([5000]);

// fadeIn and fadeOut
//deals with opacity of the element. from 1 to 0.
// $(".hideMe").fadeOut();
// $("#shadow").fadeIn();

// $("#fading").fadeOut([0]);
// $("#displaying").hide([0]);
// // $("#fading").fadeIn([1000]);
// $("#displaying").hide([1000]);

// // Toggle seems fitting
// // $("selector").toggle([duration][,complete]);

// $("#displaying").toggle();
// //fadeToggle
// $("#element").fadeToggle();






});