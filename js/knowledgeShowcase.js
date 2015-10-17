
$(document).ready(function(){
	$.get('data/knowledgeBase.json').success(function(data){
		$.each(data.JavaScript, function(){
			$('.knowledge-showcase').append($('<p>' + this.question + '</p>' +'<p>' + this.answer + '</p>'));
		});
	});
});


