/*-----------------------------------------------------------------------------------

 	Custom JS - All front-end jQuery
 
-----------------------------------------------------------------------------------*/
 

jQuery(document).ready(function() {
	

/*-----------------------------------------------------------------------------------*/
/*	Superfish Settings - http://users.tpg.com.au/j_birch/plugins/superfish/
/*-----------------------------------------------------------------------------------*/
	
	if (jQuery().superfish) {
		
		jQuery('#primary-nav ul').superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 'fast',
			autoArrows: false,
			dropShadows: false
		}); 
	
	}


/*-----------------------------------------------------------------------------------*/
/*	Slides Navigation Effect
/*-----------------------------------------------------------------------------------*/
	
	if (jQuery().slides) {
		
		jQuery("#slider").hover( function() {
			jQuery('.slides-nav').fadeIn(200);
		}, function () {
			jQuery('.slides-nav').fadeOut(200);
		});
		
	}
	
	
/*-----------------------------------------------------------------------------------*/
/*	Contact From Validation
/*-----------------------------------------------------------------------------------*/
	
	if (jQuery().validate) {
		
		jQuery("#contactForm").validate();
		
	}


/*-----------------------------------------------------------------------------------*/
/*	Portfolio Overlay Effect
/*-----------------------------------------------------------------------------------*/
	
	function tz_overlay() {
			
		jQuery('.post-thumb a').hover( function () {
			
			jQuery(this).find('.overlay').stop().animate({ opacity: 1 }, 200);
		
		}, function () {
			
			jQuery(this).find('.overlay').stop().animate({ opacity: 0 }, 200);
		});
	
	}
	
	tz_overlay();


/*-----------------------------------------------------------------------------------*/
/*	PrettyPhoto - http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/
/*-----------------------------------------------------------------------------------*/
	
	function tz_lightbox() {
		
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'dark_rounded',
			show_title:false,
			overlay_gallery: false
		});
	
	}
	
	if(jQuery().prettyPhoto) {
	
		tz_lightbox(); 
			
	}


/*-----------------------------------------------------------------------------------*/
/*	Opacity changes
/*-----------------------------------------------------------------------------------*/

	jQuery(".blog .post-thumb img, .archive .post-thumb img, .search-results .post-thumb img").css({
		opacity: 1
	});
	
	jQuery(".blog .post-thumb img, .archive .post-thumb img, .search-results .post-thumb img").hover(function() {
		jQuery(this).stop().animate({
			opacity: 0.6
			}, 200);
	},function() {
		jQuery(this).stop().animate({
			opacity: 1
			}, 500);
	});



/*-----------------------------------------------------------------------------------*/
/*	Portfolio Sorting - UPDATED 09 Feb 2011
/*-----------------------------------------------------------------------------------*/
	
	if (jQuery().quicksand) {

		(function($) {
			
			$.fn.sorted = function(customOptions) {
				var options = {
					reversed: false,
					by: function(a) {
						return a.text();
					}
				};
		
				$.extend(options, customOptions);
		
				$data = jQuery(this);
				arr = $data.get();
				arr.sort(function(a, b) {
		
					var valA = options.by($(a));
					var valB = options.by($(b));
			
					if (options.reversed) {
						return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
					} else {		
						return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
					}
			
				});
		
				return $(arr);
		
			};
		
		})(jQuery);
		
		jQuery(function() {
		
			var read_button = function(class_names) {
				
				var r = {
					selected: false,
					type: 0
				};
				
				for (var i=0; i < class_names.length; i++) {
					
					if (class_names[i].indexOf('selected-') == 0) {
						r.selected = true;
					}
				
					if (class_names[i].indexOf('segment-') == 0) {
						r.segment = class_names[i].split('-')[1];
					}
				};
				
				return r;
				
			};
		
			var determine_sort = function($buttons) {
				var $selected = $buttons.parent().filter('[class*="selected-"]');
				return $selected.find('a').attr('data-value');
			};
		
			var determine_kind = function($buttons) {
				var $selected = $buttons.parent().filter('[class*="selected-"]');
				return $selected.find('a').attr('data-value');
			};
		
			var $preferences = {
				duration: 500,
				adjustHeight: 'auto'
			}
		
			var $list = jQuery('#items');
			var $data = $list.clone();
		
			var $controls = jQuery('#filter');
		
			$controls.each(function(i) {
		
				var $control = jQuery(this);
				var $buttons = $control.find('a');
		
				$buttons.bind('click', function(e) {
		
					var $button = jQuery(this);
					var $button_container = $button.parent();
					var button_properties = read_button($button_container.attr('class').split(' '));      
					var selected = button_properties.selected;
					var button_segment = button_properties.segment;
		
					if (!selected) {
		
						$buttons.parent().removeClass();
						$button_container.addClass('selected-' + button_segment);
		
						var sorting_type = determine_sort($controls.eq(1).find('a'));
						var sorting_kind = determine_kind($controls.eq(0).find('a'));
		
						if (sorting_kind == 'all') {
							var $filtered_data = $data.find('li');
						} else {
							var $filtered_data = $data.find('li.' + sorting_kind);
						}
		
						var $sorted_data = $filtered_data.sorted({
							by: function(v) {
								return parseInt(jQuery(v).find('.count').text());
							}
						});
		
						$list.quicksand($sorted_data, $preferences, function () {
								tz_overlay();
								tz_lightbox();
						});
			
					}
			
					e.preventDefault();
					
				});
			
			}); 
			
		});
	
	}

});