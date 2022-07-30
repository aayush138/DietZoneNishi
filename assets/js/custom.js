(function ($) {
	
	"use strict";

	$(function() {
        $("#tabs").tabs();
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	$('.schedule-filter li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


	// Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) + 1
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


})(window.jQuery);


		var t1=document.getElementById('t1');
        var t2=document.getElementById('t2');
        var t3=document.getElementById('t3');
        var t5=document.getElementById('t5');
        var t6=document.getElementById('t6');
        t1.style.height="100px";
        t2.style.height="100px";
        t3.style.height="100px";
        t5.style.height="100px";
        t6.style.height="100px";
        function sm1(){
            if (t1.style.height=='100px'){
            t1.style.overflow="hidden";
            t1.style.height="auto";
            document.getElementById('but1').innerHTML="Show Less";
            document.getElementById('but1').style.color="#f9735b"
            }

            else{
                t1.style.height="100px"; 
                document.getElementById('but1').innerHTML="Show More";
                document.getElementById('but1').style.color="#0D8344"
            }
        };

        function sm2(){
            if (t2.style.height=='100px'){
            t2.style.overflow="hidden";
            t2.style.height="auto";
            document.getElementById('but2').innerHTML="Show Less";
            document.getElementById('but2').style.color="#f9735b"
            }

            else{
                t2.style.height="100px"; 
                document.getElementById('but2').innerHTML="Show More";
                document.getElementById('but2').style.color="#0D8344"
            }
        };

        function sm3(){
            if (t3.style.height=='100px'){
            t3.style.overflow="hidden";
            t3.style.height="auto";
            document.getElementById('but3').innerHTML="Show Less";
            document.getElementById('but3').style.color="#f9735b"
            }

            else{
                t3.style.height="100px"; 
                document.getElementById('but3').innerHTML="Show More";
                document.getElementById('but3').style.color="#0D8344"
            }
        };

        function sm5(){
            if (t5.style.height=='100px'){
            t5.style.overflow="hidden";
            t5.style.height="auto";
            document.getElementById('but5').innerHTML="Show Less";
            document.getElementById('but5').style.color="#f9735b"
            }

            else{
                t5.style.height="100px"; 
                document.getElementById('but5').innerHTML="Show More";
                document.getElementById('but5').style.color="#0D8344"
            }
        };

        function sm6(){
            if (t6.style.height=='100px'){
            t6.style.overflow="hidden";
            t6.style.height="auto";
            document.getElementById('but6').innerHTML="Show Less";
            document.getElementById('but6').style.color="#f9735b"
            }

            else{
                t6.style.height="100px"; 
                document.getElementById('but6').innerHTML="Show More";
                document.getElementById('but6').style.color="#0D8344"
            }
        };
