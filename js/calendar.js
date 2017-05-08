$(document).ready(function(){
  	$('[data-type="month-container"]').hide();
  	$('[data-type="week-container"]').hide();
  	$('[data-type="week"]').hide();
  	$('[data-type="month"]').hide();

});
	$('.cal-object').click(function(){
		/*if clicked on season show months*/
		var $clickedArea = $(this).data('when');
		if($(this).data('type') == 'season'){
			$('#cal-season-container').toggle("slide",{direction:"left", duration:600},function(){	

					$().showSeason($clickedArea);
			});
		}
		/*if clicked on month show weeks*/
		else if($(this).data('type')=='month'){
			$('#cal-month-container').toggle("slide",{direction:"left", duration:600},function(){
					$().showMonth($clickedArea)
			});
		}
	});

jQuery.fn.extend({
	showSeason: function($clickedArea){
		var $season = $clickedArea;

		$("div").filter('.' + $season).toggle();
		$('#cal-month-container').toggle("slide",{direction:"right", duration:600});	
	}
});

jQuery.fn.extend({
	showMonth: function($clickedArea){
		var $month = $clickedArea;
		$("div").filter('.' + $month).addClass("cal-object light-green-bg").toggle();
		$('#cal-week-container').toggle("slide",{direction:"right", duration:600});	
	}
});