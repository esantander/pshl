if ($(window).width() >= 980 ){
	$('#recentNewsWrapper').children().hide();
    $('.span4').animate({ marginTop: "-220px"},2000,"easeOutExpo");
	$('.span4').animate({ marginTop: "-20px"},2000, "easeInQuint");
	setTimeout(func, 4000);
	};
	
	function func() {
    $('#recentNewsWrapper').children().show("fade", 1050, "easeOutExpo");
}