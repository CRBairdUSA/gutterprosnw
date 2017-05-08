var $size=1; var $gutters=1; var $fullness=1; var $over25=1; var $noreach=1;

var $B; var $G; var $F; var $O; var $N;

var $calcprice;
/*All the stored DATA for prices are here in this object*/
var $prices = {
	1: {$B:50, $G:{1:40, 2:50, 3:55}, $F:{1:0,2:10,3:10}, $O:{1:0, 2:10}, $N:{1:0, 2:5}},
	2: {$B:70, $G:{1:20, 2:30, 3:40}, $F:{1:10,2:20,3:30}, $O:{1:0, 2:20}, $N:{1:0, 2:10}},
	3: {$B:100, $G:{1:10, 2:30, 3:50}, $F:{1:20,2:40,3:50}, $O:{1:0, 2:20}, $N:{1:0, 2:30}}
};
/*stored locations for pictures*/
var $pictures = {
	$S: { 1:'size1', 2:'size2', 3:'size3'}, 
	$G: { 1:'gutters1', 2:'gutters2', 3:'gutters3'}, 
	$F: { 1:'fullness1', 2:'fullness2', 3:'fullness3'}, 
	$O: { 1:0, 2:0}, 
	$N: { 1:0, 2:0}
};

alert("working");
$(document).on("mousemove click change", function() {
	$size = $('#size-output').val();
	$gutters =$('#gutter-output').val();
	$fullness = $('#fullness-output').val();

	$().calculatePrice();
});
$(document).on("change", 'input#over25-output', function(event){	 
	 if(this.checked){ $over25 = 2; }
	 else{ $over25 = 1; }
	 $().calculatePrice();
});
$(document).on("change", 'input#noreach-output', function(event){
	 if(this.checked){ $noreach = 2; }
	 else{ $noreach = 1; }
	 $().calculatePrice();
});

jQuery.fn.extend({
	calculatePrice: function(){

		var size = ((parseInt($size))/50 + 1);
		var gutters=((parseInt($gutters))/50 + 1);
		var fullness=((parseInt($fullness))/50 + 1);
		var over25 = parseInt($over25);
		var noreach = parseInt($noreach);

		$B = parseInt($prices[size]["$B"]);
		$G = parseInt($prices[size]['$G'][gutters]);
		$F = parseInt($prices[size]['$F'][fullness]);
		$O = parseInt($prices[size]['$O'][over25]);
		$N = parseInt($prices[size]['$N'][noreach]);
		

		$calcprice=($B + $G + $F + $O + $N);
		/*$calcprice=($baseprice + $g + $f + $o +$n);*/

		$().choosePicture(size, gutters, fullness, over25, noreach);

		$('#calcprice-printed').text('$'+$calcprice+'.00');
	}	
});
jQuery.fn.extend({
	choosePicture: function(size, gutters, fullness, over25, noreach){
		var $addy = "images/calc/";
		$('#size-pic').attr('src', $addy + $pictures['$S'][size] + ".png");
		$('#gutter-pic').attr('src', $addy + $pictures['$G'][gutters]+ ".png");
		$('#fullness-pic').attr('src', $addy + $pictures['$F'][fullness]+ ".png");
	}
});



/*
var $B = $prices[$size]["$B"];
		var $G = $prices[$size]["$G"][$gutters];
		var $F = $prices[$size]["$F"][$fullness];
		var $O = $prices[$size]["$O"][$over25];
		var $N = $prices[$size]["$N"][$noreach];

		var $G = $prices['1']['$G']['1'];

		$calcprice=($B + $G + $F + $O + $N);

*/