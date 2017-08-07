
$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		variableWidth: true,
		responsive: [
  {
  	breakpoint:767,
  	settings: {
      arrows:false,
  		slidesToShow: 1,
  		slidesToScroll: 1,
      variableWidth:false,
      adaptiveHeight: true
  	}
  }
  ]
});
});
