$(document).ready(function(){
	let footer = document.getElementById('footer');
	function setFooter(){
		let heightDevice = $(window).height();
		let heightHeader= $('#header').outerHeight();
		let heightBody= $('#wrap-main').outerHeight();
		let heightFooter= $('#footer').outerHeight();
		let sumBody = heightHeader + heightBody + heightFooter;
		if (sumBody < heightDevice) {
			$('footer').removeClass('position');
			$('footer').addClass('position');
		}else{
			$('footer').removeClass('position');
		}
	}
	setFooter();
	$(window).resize(function(){
		setFooter();
	});

	$('.icon-bar').click(function(){
		// $('.tab-control').animate(
		// 	{
		// 		width: '76px',
		// 	});
		$('h1').animate({ width:'toggle'},'fast');
		$('.text-name').animate({ width:'toggle'},'fast');
		$('.tab-control').toggleClass('active');
		$('.wrapper').toggleClass('active');
		// $('.wrapper').animate({
		// 	width: '1398px'
		// })
	})
	
 })