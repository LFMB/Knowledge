$.getJSON("data/knowledgeBase.json", function(data){
	var ansLength;
$.each(knowledgeBase.JavaScript, function(){
console.log(this.question);
ansLength = this.answer.length;
console.log(ansLength);
});

});

