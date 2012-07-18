SyntaxHighlighter.all();

$(function() {
	$( "#accordion1" ).accordion({
		autoHeight: false,
		navigation: true,
		collapsible: true
	});
	
	$( "#accordion1" ).accordion("activate", false);
	
	$( "#accordion2" ).accordion({
		autoHeight: false,
		navigation: true,
		collapsible: true
	});
	
	$( "#accordion2" ).accordion("activate", false);

	$( "#accordion3" ).accordion({
		autoHeight: false,
		navigation: true,
		collapsible: true
	});
	
	$( "#accordion3" ).accordion("activate", false);
	
	$("div.code").hide();
	
	//show code 1
	$("a.codeButton1").click(function(){
		$("div.code1").toggle(); 
		return false;
	});

	//show code 2
	$("a.codeButton2").click(function(){
		$("div.code2").toggle(); 
		return false;
	});

	//show code 3
	$("a.codeButton3").click(function(){
		$("div.code3").toggle(); 
		return false;
	});

	//show code 4
	$("a.codeButton4").click(function(){
		$("div.code4").toggle(); 
		return false;
	});

	//show code 5
	$("a.codeButton5").click(function(){
		$("div.code5").toggle(); 
		return false;
	});

	//show code 6
	$("a.codeButton6").click(function(){
		$("div.code6").toggle(); 
		return false;
	});

	//show code 7
	$("a.codeButton7").click(function(){
		$("div.code7").toggle(); 
		return false;
	});

	//show code 8
	$("a.codeButton8").click(function(){
		$("div.code8").toggle(); 
		return false;
	});

	//show code 9
	$("a.codeButton9").click(function(){
		$("div.code9").toggle(); 
		return false;
	});

	//show code 10
	$("a.codeButton10").click(function(){
		$("div.code10").toggle(); 
		return false;
	});

	//show code 11
	$("a.codeButton11").click(function(){
		$("div.code11").toggle(); 
		return false;
	});

	//show code 12
	$("a.codeButton12").click(function(){
		$("div.code12").toggle(); 
		return false;
	});

});