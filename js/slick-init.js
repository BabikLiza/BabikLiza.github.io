$(document).ready(function(){
	$('#sl_01').slick({
        autoplay: true,
        autoplaySpeed: 3000,
		arrows: true,
		dots: true,
        pauseOnDotsHover: true,
		slidesToShow: 1,
		speed: 350,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows: false,
				}
			}
		]
	});
});

