(function ($) {

    $(window).scroll(function () {
        if ($('.navbar.navbar-fixed-top').offset().top > 300) {

            $('.navbar-header').removeClass('hidden');
        } else {

            $('.navbar-header').addClass('hidden');
        }
    });

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});

	// local scroll
		jQuery('.navbar').localScroll({ hash: true, offset: { top: 0 }, duration: 800, easing: 'easeInOutExpo' });
		jQuery('.navbar').localScroll({ hash: true, offset: { top: 0 }, duration: 800, easing: 'easeInOutExpo' });


	// portfolio
//    if($('.isotopeWrapper').length){

//        var $container = $('.isotopeWrapper');
//        var $resize = $('.isotopeWrapper').attr('id');
//        // initialize isotope

//        $container.isotope({
//            itemSelector: '.isotopeItem',
//            resizable: false, // disable normal resizing
//            masonry: {
//                columnWidth: $container.width() / $resize
//            }



//        });

//        $container.imagesLoaded(function () {

//            $container.isotope({
//                // options...
//            });
//        });
//        $('#filter a').click(function(){

//            $('#filter a').removeClass('current');
//            $(this).addClass('current');
//            var selector = $(this).attr('data-filter');
//            $container.isotope({
//                filter: selector,
//                animationOptions: {
//                    duration: 1000,
//                    easing: 'easeOutQuart',
//                    queue: false
//                }
//            });
//            return false;
//        });


//        $(window).smartresize(function(){
//            $container.isotope({
//                // update columnWidth to a percentage of container width
//                masonry: {
//                    columnWidth: $container.width() / $resize
//                }
//            });
//        });


//}


	// fancybox
	jQuery(".fancybox").fancybox();


	if (Modernizr.mq("screen and (max-width:1024px)")) {
			jQuery("body").toggleClass("body");

	} else {
		var s = skrollr.init({
			mobileDeceleration: 1,
			edgeStrategy: 'set',
			forceHeight: true,
			smoothScrolling: true,
			smoothScrollingDuration: 300,
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});
	}

	//scroll menu
	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
		});


		//parallax
        var isMobile = false;

        if(Modernizr.mq('only all and (max-width: 1024px)') ) {
            isMobile = true;
        }


        if (isMobile == false && ($('#parallax1').length  ||isMobile == false &&  $('#parallax2').length ||isMobile == false &&  $('#testimonials').length))
        {


            $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }
	/**
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
	function scroll_if_anchor(href) {
		href = typeof(href) == "string" ? href : $(this).attr("href");

		// You could easily calculate this dynamically if you prefer
		var fromTop = 50;

		// If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
		// Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
		if(href.indexOf("#") == 0) {
				var $target = $(href);

				// Older browser without pushState might flicker here, as they momentarily
				// jump to the wrong position (IE < 10)
				if($target.length) {
						$('html, body').animate({ scrollTop: $target.offset().top - fromTop });
						if(history && "pushState" in history) {
								history.pushState({}, document.title, window.location.pathname + href);
								return false;
						}
				}
		}
	}

	// When our page loads, check to see if it contains and anchor
	scroll_if_anchor(window.location.hash);

	// Intercept all anchor clicks
	$("body").on("click", "a", scroll_if_anchor);

	//nicescroll
	$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5});
	function initNice() {
		if($(window).innerWidth() <= 960) {
			$('html').niceScroll().remove();
		} else {
			$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5});
		}
	}
	$(window).load(initNice);
	$(window).resize(initNice);

})(jQuery);
