$("li").click(function(){
	$(this).toggleClass("completed");
});
//click to remove the todo content
$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(){
	console.log("press");
});