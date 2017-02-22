/* jQuery for index_main */

var altFlag = 0;
$(document).ready(function(){

	//Hide, Show, Toggle
	$("#hideTable").on("click", hideMe);
	$("#clickToShow").on("click", showMe);
	$("#entries").on( "click",toggleMe);

	//Fade in, Fade Out, Fade Toggle
	$(".image5FadeIn").on("dblclick", doFadeIn);
	$(".image5FadeOut").on("dblclick", doFadeOut);
	$(".image5FadeTo").on("dblclick", doFadeTo);
	$(".image5FadeToggle").on("dblclick", doFadeToggle);

	//Add , Delete row in Contact Us table
	$("#addRow").on("click", addRow);
	$("#myTable td").not(".doNotDelete").on("click", getInputArea);
	$(".delete").on("click", deleteRow);
	$("#myTable td").not(".deleteDiv").on({
	    mouseenter: doMouseEnter,
	    mouseleave: doMouseLeave
	});

	$(document).on('keydown', function(e) {
	   	if(e.keyCode == 18)
	   	{
	   		altFlag = 1;
		}
		//chain 3 animate events on "A" keydown
		if(e.keyCode == 65)
		{
			$("#chain_1").animate({opacity: '0.5'}, function(){
				$("#chain_2").animate({height: '150px'}, function(){
					$("#chain_2").animate({height: '400px'});
				});
			});
		}
	});

	$(document).on('keyup', function(e) {
	   	if(e.keyCode == 18)
	   	{
	   		altFlag = 0;
			$("#myTable td").not(".doNotDelete").css({"background-color":"#ffffe6", "color" : "black"});
		}
	});


	//MouseEnter, MouseLeave
	$(".mouseEl").mouseenter(function(){
		$(this).css({"background-color":"#ffff33","color":"black"});
		$(this).fadeTo("slow", 0.5, mouseEnterLeaveCallback);
	});
	$(".mouseEl").mouseleave(function(){
		$(this).css({"background-color":"black","color":"#ffff33"});
		$(this).fadeTo("slow", 1, mouseEnterLeaveCallback);
	});


	
	//chain fade on "F" key pressed
	$(document).on("keypress", function(e){
		if(e.keyCode == 102)
		{
			$("#chain_fade1").fadeTo("slow", 0.15, function(){
				$("#chain_fade2").fadeTo("slow", 0.15, function(){
					$("#chain_fade3").fadeTo("slow", 0.15);
				});
			});
		}
	});
});	

//TABLE

//----------UPDATE ROWS-------------
function getInputArea(){
	var earlierText = $(this).text();
	$(this).empty();
	$(this).append('<input type="text" id="editCell">');
	$(this).unbind();
	$("#editCell").val(earlierText);
	$("#editCell").focus();
	$("#editCell").blur(saveText);
}

function saveText(){
	$(this).parent().css({"background-color":"#ffffe6", "color" : "black"});
	//binding old events which were unbinded
	$(this).parent().on({
	    mouseenter: doMouseEnter,
	    mouseleave: doMouseLeave
	});
	$(this).parent().on("click", getInputArea);
	$(this).parent().html($(this).val());
}


//------------ADD rows--------------
function addRow () {
	$('#myTable tr:last').after('<tr><td></td><td></td><td></td><td></td><td><button class = "centreMe btn btn-danger delete" type="button">Delete</button></td></tr>');
	//register events on newly added rows
	$("#myTable td").not(".doNotDelete").on("click", getInputArea);
	$(".delete").on("click", deleteRow);	
	$("#myTable td").not(".doNotDelete").on({
	    mouseenter: doMouseEnter,
	    mouseleave: doMouseLeave
	});
}

//----------DELETE ROWS-------------
function deleteRow () {
	$(this).parent().parent().remove();
}

//---------- HIDE ME--------------

function hideMe () {
	$("#myTable").hide(1000, callbackHide);
}

function callbackHide () {
	alert("Your table is hidden. Please refresh to get it back!")
}


//---------- SHOW ME--------------

function showMe () {
	$("#showForm").show();
}


//---------- TOGGLE ME--------------

function toggleMe () {
	$("#myNewEntries").toggle();
}

//---------FADE IN-----------------

function doFadeIn () {
	$(".Image5").fadeIn(3000);
}

//---------FADE OUT-----------------

function doFadeOut () {
	$(".Image5").fadeOut(2000);
}


//---------FADE TO---------------

function doFadeTo(){
	$(".Image5").fadeTo("slow", 0.5);
}

//---------FADE TOGGLE---------------

function doFadeToggle () {
	$(".Image5").fadeToggle(500);
}

//----------MOUSE ENTER-------------

function doMouseEnter (evt) {
	if (altFlag == 1)
	$(this).css({"background-color":"LightSkyBlue", "color" : "red"});
}


//----------MOUSE LEAVE-------------

function doMouseLeave () {
	$(this).css({"background-color":"#ffffe6", "color" : "black"});
}


//---------CALLBACK-----------------

function mouseEnterLeaveCallback () {
	alert("Done!");
}






