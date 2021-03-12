$(document).ready(function(){

	let footer = document.getElementById('footer');
	function setFooter(){
		let heightDevice = $(window).height();
		let heightHeader= $('#header').outerHeight();
		let heightBody= $('#wrap-main').outerHeight();
		let heightFooter= $('#footer').outerHeight();
		// console.log(heightBody);
		let sumBody = heightHeader + heightBody + heightFooter;
		if (sumBody < heightDevice) {
			$('footer').removeClass('position');
			$('footer').addClass('position');
		}else{
			$('footer').removeClass('position');
		}
		// console.log(sumBody);
		// console.log(heightDevice);
	}
	setFooter();
	$(window).resize(function(){
		setFooter();
	})
 })