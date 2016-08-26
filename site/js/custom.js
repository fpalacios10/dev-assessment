$(function() {
	//	Slick carousel
	$('.your-class').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1, 
	  autoplay: true,
	  autoplaySpeed: 4000,
	  prevArrow: '<i  id="leftArrow" class=" arrows fa fa-arrow-circle-left fa-3x"  aria-hidden="true"></i>',
	  nextArrow: '<i  id="rightArrow" class=" arrows fa fa-arrow-circle-right  fa-3x"  aria-hidden="true"></i>'
	});
	
  	//Change arrow size if mobile
	var width = $(window).width();
	if (width<=420) {
		$('#leftArrow, #rightArrow').removeClass('fa-3x').addClass('fa-2x');
	}
	else {
	}

	//set weather
	var jsonData = $.getJSON("weather-data.json", function(jsonData) {
		console.log(jsonData); 
		var temp = jsonData.data[0].item.condition.temp; 
		var unit = jsonData.data[0].units.temperature;
		var link = jsonData.data[0].link;
		$("#weather").append('<a href="'+link+'">' + temp + unit +'</a>');
	});
});
