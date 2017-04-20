/*

	BSCSlider - Slideshow jQuery Plugin
	Version : 1.0
	Author	: BS-Créa
	
*/

(function($) {
	$.bscSlider = function(settings, el){
		el=$(el);
		el.items = el.find('img');

		el.settings = $.extend(
			{
				duration		: 6000,		// Length between transitions
				effect			: 1,		// 0-None, 1-Fade, 2-Slide Over to Top, 3-Slide Over to Right, 4-Slide Over to Bottom, 5-Slide Over to Left, 6-Slide to Right, 7-Slide to Left, 8-Slide to Top, 9-Slide to Bottom, 10-Slide Remove to Right, 11-Slide Remove to Left, 12-Slide Remove to Top, 13-Slide Remove to Bottom, 14-Parallax to Right, 15-Parallax to Left, 16-Parallax to Top, 17-Parallax to Bottom
 				effect_speed	: 750,		// Speed of transition
				easing			: 'swing',
			},
			settings
		);

		el.mainWrap = el;
		el.mainWrap.height = el.height();
		el.mainWrap.width = el.width();

		 el.slidecount = el.items.length;
		if (el.slidecount > 1) {
			el.settings.interval = setInterval(function() {
				el.nextSlide();
			}, el.settings.duration);
		}
		el.items.last().prependTo(el.mainWrap);


		el.items.each(function(i) {
			$(this).wrap('<div class="slider-item" style="background-image: url(\''+$(this).attr('src')+'\'); ' + (i!=0 ? 'opacity: 0;' : 'opacity: 1;') + '"></div>');
			el.newelt = $(this).parent();
			$(this).remove();
		});
		el.nextSlide = function(){
			el.mainWrap.find('.slider-item').first().css('opacity', '0').appendTo(el.mainWrap);
			el.slideCurr = el.mainWrap.find('.slider-item').first();
			el.slideNext = el.mainWrap.find('.slider-item').eq(1);
			clearInterval(el.settings.interval);
			switch(el.settings.effect){
				case 0: case 'none':			// No transition
					el.slideNext.css('opacity', 1);
					el.afterAnim();
					//nextSlide();
					break;
				case 1: case 'fade':			// Fade
					el.slideNext.animate({ opacity: 1 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 2: case 'slideOverTop':		// Slide Over to Top
					el.slideNext.animate({ opacity: 1, top: el.mainWrap.height }, 0).animate({ top: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 3: case 'slideOverRight':		// Slide Over to Right
					el.slideNext.animate({ opacity: 1, left: -el.mainWrap.width }, 0).animate({ left: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 4: case 'slideOverBottom':		// Slide Over to Bottom
					el.slideNext.animate({ opacity: 1, top: -el.mainWrap.height }, 0).animate({ top: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 5: case 'slideOverLeft':		// Slide Over to Left
					el.slideNext.animate({ opacity: 1, left: el.mainWrap.width }, 0).animate({ left: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 6: case 'slideRight':	// Slide to Right
					el.slideCurr.animate({ left: el.mainWrap.width }, el.settings.effect_speed, el.settings.easing);
					el.slideNext.animate({ opacity: 1, left: -el.mainWrap.width }, 0).animate({ left: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 7: case 'slideLeft':	// Slide to Left
					el.slideCurr.animate({ left: -el.mainWrap.width }, el.settings.effect_speed, el.settings.easing);
					el.slideNext.animate({ opacity: 1, left: el.mainWrap.width }, 0).animate({ left: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 8: case 'slideTop':	// Slide to Top
					el.slideCurr.animate({ top: -el.mainWrap.height }, el.settings.effect_speed, el.settings.easing);
					el.slideNext.animate({ opacity: 1, top: el.mainWrap.height }, 0).animate({ top: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 9: case 'slideBottom':	// Slide to Bottom
					el.slideCurr.animate({ top: el.mainWrap.height }, el.settings.effect_speed, el.settings.easing );
					el.slideNext.animate({ opacity: 1, top: -el.mainWrap.height }, 0).animate({ top: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;


				case 10: case 'slideRemoveRight':	// Slide Remove to Right
					el.slideNext.css('z-index', 8).animate({ opacity: 1 }, 0, el.settings.easing );
					el.slideCurr.css('z-index', 10).animate({ left: el.mainWrap.width }, el.settings.effect_speed, el.settings.easing, function(){ $(this).css({ 'z-index' : '', 'left' : '' }); el.afterAnim(); });
					break;
				case 11: case 'slideRemoveLeft':	// Slide Remove to Left
					el.slideNext.css('z-index', 8).animate({ opacity: 1 }, 0, el.settings.easing );
					el.slideCurr.css('z-index', 10).animate({ left: -el.mainWrap.width }, el.settings.effect_speed, el.settings.easing, function(){ $(this).css({ 'z-index' : '', 'left' : '' }); el.afterAnim(); });
					break;
				case 12: case 'slideRemoveTop':	// Slide Remove to Top
					el.slideNext.css('z-index', 8).animate({ opacity: 1 }, 0, el.settings.easing );
					el.slideCurr.css('z-index', 10).animate({ top: -el.mainWrap.height }, el.settings.effect_speed, el.settings.easing, function(){ $(this).css({ 'z-index' : '', 'top' : '' }); el.afterAnim(); });
					break;
				case 13: case 'slideRemoveBottom':	// Slide Remove to Bottom
					el.slideNext.css('z-index', 8).animate({ opacity: 1 }, 0, el.settings.easing );
					el.slideCurr.css('z-index', 10).animate({ top: el.mainWrap.height }, el.settings.effect_speed, el.settings.easing, function(){ $(this).css({ 'z-index' : '', 'top' : '' }); el.afterAnim(); });
					break;
				
				case 14: case 'parallaxRight':	// Parallax to Right
					el.slideCurr.animate({ left: el.mainWrap.width/3 }, el.settings.effect_speed, el.settings.easing);
					el.slideNext.animate({ opacity: 1, left: -el.mainWrap.width }, 0).animate({ left: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 15: case 'parallaxLeft':	// Parallax to Left
					el.slideCurr.animate({ left: -el.mainWrap.width/3 }, el.settings.effect_speed, el.settings.easing);
					el.slideNext.animate({ opacity: 1, left: el.mainWrap.width }, 0).animate({ left: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 16: case 'parallaxTop':	// Parallax to Top
					el.slideCurr.animate({ top: -el.mainWrap.height/3 }, el.settings.effect_speed, el.settings.easing);
					el.slideNext.animate({ opacity: 1, top: el.mainWrap.height }, 0).animate({ top: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
				case 17: case 'parallaxBottom':	// Parallax to Bottom
					el.slideCurr.animate({ top: el.mainWrap.height/3 }, el.settings.effect_speed, el.settings.easing);
					el.slideNext.animate({ opacity: 1, top: -el.mainWrap.height }, 0).animate({ top: 0 }, el.settings.effect_speed, el.settings.easing, function(){ el.afterAnim(); });
					break;
			}
			

		}
		el.prevSlide = function() {
			el.mainWrap.find('.slider-item').last().css('opacity', '0').prependTo(el.mainWrap);
			clearInterval(el.settings.interval);
		}

		el.afterAnim = function() {
			el.mainWrap.find('.slider-item').first().css('opacity', '0');
			el.settings.interval = setInterval(function() {
				el.nextSlide();
			}, el.settings.duration);
		}
	
	};
	 $.fn.bscSlider = function(options){
        return this.each(function(){
            (new $.bscSlider(options, this));
        });
    };
})(jQuery);
