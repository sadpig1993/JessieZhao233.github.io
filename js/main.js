(function() {
	$("#welcomeMain").hide();
	var hash = location.hash.replace('#', '');
	getArticle(hash);
	$("#moreToMainPage").on("click", function() {
		location.hash = "#myCat";
	});
	$("#pet").on("click", function() {
		location.hash = "#myCat";
	});
	$("#note").on("click", function() {
		location.hash = "#note";
	});
	$(window).on('hashchange', function() {
		var hash = location.hash.replace('#', '');
		getArticle(hash);
	});
	$(window).on('',function(){
		
	});

	function getArticle(hash) {
		$.ajax({
			url: "./data/" + hash + ".json",
			type: "GET",
			dataType: 'json',
			success: function(data) {
				$('#view').html(data.content);
			},
			error: function(er) {
				console.log(er);
			}
		});
	}
})();