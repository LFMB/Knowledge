var main = function(){
	"use strict";

	/*
	// data for the todo list
	var toDos = [
		"style active class",
		"look up toArray method",
		"look up empty method",
		"understand forEach(function (element){}); better"
	];
	*/

	//adds comments to comment section of page
	var addCommentFromInput = function(){
		var $new_comment;

		if($(".comment-input textarea").val()!== ""){
			$new_comment = $("<p>").text($(".comment-input textarea").val());
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input textarea").val("");		
		}
	};



	/*
	//toggles active class for to-do list
	$(".tabs a span").toArray().forEach(function (element, event) {
		// creates a click handler for this element
		$(element).on("click", function (event){
			event.preventDefault();

			var $element = $(element), $content;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			//$('.toDoList').empty(); need to understand this better

			if($element.parent().is(":nth-child(2)")){
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
				$(".toDoList").append($content);
			}

		});
	});
	*/

	//events that add comments from visitor to page
	$(".comment-input button").on("click", function (event){
		event.preventDefault();
		addCommentFromInput();
	});

	$(".comment-input textarea").on("keypress", function (event){
		if(event.keyCode === 13){
			addCommentFromInput();
		}
	});
};
$(document).ready(main);