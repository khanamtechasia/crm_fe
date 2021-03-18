$(document).ready(function(){
	let widthDevice = $(window).outerWidth();
	let footer = document.getElementById('footer');
	let tabControl = $('#tab-controls').outerWidth();	
	// console.log();
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
	// 
	let marginWrap = tabControl + 90;
		if(widthDevice > 1800){
		 	$('main#wrap-main .wrapper .wrap-form').css({ 'padding-right': marginWrap + "px" });
		 }
		$(".wrapper").css({ 'padding-left': tabControl + 'px', 'transition': "all 0.5s" });
		if(widthDevice <= 768){
			$(".wrapper").css({ 'padding-left': '15px','padding-right': '15px' });
		}
	function showMenu(){
		let widthDevice = $(window).outerWidth();
		if(widthDevice > 768){
			$(".wrapper").css({ 'padding-left': tabControl + 'px', 'transition': "all 0.5s" });
			$('#tab-controls').css({'left': '0%', 'transition': 'all .5s'});
			$('.showMenu').css({ 'display': 'none', 'transition': 'all .5s'});
		} else{
			$('#tab-controls').css({'left': '0%', 'transition': 'all .5s'});
			$('.showMenu').css({ 'display': 'none', 'transition': 'all .5s'});
		}

	}
	function hideMenu(){
		let widthDevice = $(window).outerWidth();
		if (widthDevice >768) {
			$(".wrapper").css({ 'padding-left': '0px', 'transition': "all 0.5s" });
			$('#tab-controls').css({'left': '-100%', 'transition': 'all .5s'});
			$('.showMenu').css({ 'display': 'flex', 'transition': 'all .5s'});
		}else{
			$('#tab-controls').css({'left': '-100%', 'transition': 'all .5s'});
			$('.showMenu').css({ 'display': 'flex', 'transition': 'all .5s'});
		}
	}

	$(".hide-menu").click(function(){
		hideMenu()
	})
	$(".showMenu").click(function(){
		showMenu()
	})

	// scroll
	function scrollMenu(){
		var offset = 1;
		var back_to_top = document.getElementById('header');
		window.addEventListener('scroll', function() {
		    if (pageYOffset > offset) {
		        back_to_top.classList.add('fixed-menu');
		    } else {
		        back_to_top.classList.remove('fixed-menu');
		    };
		});
	}
	if(widthDevice < 768){
		scrollMenu();
	}
	// FOOTER
	let d = new Date();
	document.getElementById('fecthYear').innerHTML = d.getFullYear();
	
 })