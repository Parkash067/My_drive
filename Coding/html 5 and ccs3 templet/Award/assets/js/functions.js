jQuery(document).ready(function() {	

    megaMenu();
    
    ///delay #navi-logo overflow
    setTimeout("megaMenuLoadingFix()", 100);
    
    /// homepage info widget
    infoWidget();
    
    /// footer icons
	hoverEffects();
    
    table();
    blog();
    
    /// posrtfolio post
    portfolio();
    
    /// portfolio filter
    portfolioFilter();
    
    /// hover effect
    portfolioZindex()
    
    /// hover effect
    portfolioItem();
    
    /// vertical aligns
    sloganButton();
	
});

function megaMenu() {

    $('.sub-container.non-mega').find("li:first").css('margin', '0');
    $('.sub').find(".row:last").css('margin', '0');

}

function megaMenuLoadingFix() {
    $('#navi-logo').css('overflow', "visible");
}

function infoWidget() {

    $(".infowidget").children('.widgetWrap').addClass('add');
    $(".infowidget").addClass('addBg');
    $(".infowidget li:last").css({'background': "none", "marginBottom": 0});
    
  $(".infowidget").mouseenter(function() {
    $( this ).animate({boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'}, 200);
    $( this ).switchClass( "addBg", "removeBg", 200 );
    $( this ).children('.widgetWrap').switchClass( "add", "remove", 400 );
    
  }).mouseleave(function(){
    $( this ).animate({boxShadow: '0 0 0'}, 200);
    $( this ).switchClass( "removeBg", "addBg", 200 );
    $( this ).children('.widgetWrap').switchClass( "remove", "add", 400 );
    
  });
    
}
 
function hoverEffects() {
    
jQuery("a.vimeo").hover(function() {
	jQuery(this).animate({ backgroundColor: "#44bbff" },{duration:200,queue:false}, 'easeInSine');
},function() {
	jQuery(this).animate({ backgroundColor: "#121111" },{duration:300,queue:false}, 'easeOutSine');
});
jQuery("a.twitter").hover(function() {
	jQuery(this).animate({ backgroundColor: "#1ec7ff" },{duration:200,queue:false}, 'easeInSine');
},function() {
	jQuery(this).animate({ backgroundColor: "#121111" },{duration:300,queue:false}, 'easeOutSine');
});
jQuery("a.facebook").hover(function() {
	jQuery(this).animate({ backgroundColor: "#3b5998" },{duration:200,queue:false}, 'easeInSine');
},function() {
	jQuery(this).animate({ backgroundColor: "#121111" },{duration:300,queue:false}, 'easeOutSine');
});
jQuery("a.youtube").hover(function() {
	jQuery(this).animate({ backgroundColor: "#c4302b" },{duration:200,queue:false}, 'easeInSine');
},function() {
	jQuery(this).animate({ backgroundColor: "#121111" },{duration:300,queue:false}, 'easeOutSine');
});
jQuery("a.google").hover(function() {
	jQuery(this).animate({ backgroundColor: "#d84937" },{duration:200,queue:false}, 'easeInSine');
},function() {
	jQuery(this).animate({ backgroundColor: "#121111" },{duration:300,queue:false}, 'easeOutSine');
});
jQuery("a.linkedin").hover(function() {
	jQuery(this).animate({ backgroundColor: "#006699" },{duration:200,queue:false}, 'easeInSine');
},function() {
	jQuery(this).animate({ backgroundColor: "#121111" },{duration:300,queue:false}, 'easeOutSine');
});
}
function table() {
    
    $(".table ul").each(function(){
        $(this).find("li:odd").css("background-color", "#f0f0f0");
    });
    $(".table .column:last").find('li').css("border-right", "none");
    
}
function blog() {
    
    $(".sidebar .posts .post:last").css("background", "none");
}
function portfolio() {
    
    $(".portfolio-gallery li:nth-child(3n)").css('marginRight', 0);
}
function portfolioFilter() {
	
	$('#portfolio').append('<ul class="portfolio-archive" />');
	$('.portfolio-archive').hide();
	
	$('.filter_navi li a').click(function() {
			
            
			var filter_navi = $(this).attr('rel');
			
            $('.filter_navi li').first().addClass('alpha');
            
			$('.filter_navi li a').removeClass('active');
			$(this).addClass('active');
			
			if($(this).attr('rel') == 'all') {
				$('.item').attr('rel', 'categ');
			}
			else {
				$('.item').each(function() {
					if($(this).hasClass(filter_navi)) {
						$(this).attr('rel', 'categ');
					}
					else {
						$(this).attr('rel', 'archive');
					}
				});
			}
			
            $('.portfolio-list').fadeOut(300, function() {
                $(".portfolio-list li").removeClass('alpha');
                $('.portfolio-list li').removeClass('omega');
    			$('.item[rel="categ"]').appendTo('.portfolio-list');
    			$('.item[rel="archive"]').appendTo('.portfolio-archive');
                $('.portfolio-list').fadeIn(300);
                $('.portfolio-list .portfolio-1:last').addClass('omega');
                $(".portfolio-list .portfolio-2:nth-child(2n+1)").addClass('alpha');
                $(".portfolio-list .portfolio-2:nth-child(2n)").addClass('omega');
                $(".portfolio-list .portfolio-3:nth-child(3n+1)").addClass('alpha');
                $(".portfolio-list .portfolio-3:nth-child(3n)").addClass('omega');
                $(".portfolio-list .portfolio-4:nth-child(4n+1)").addClass('alpha');
                $(".portfolio-list .portfolio-4:nth-child(4n)").addClass('omega');
                $(".portfolio-list .portfolio-3s:nth-child(3n+1)").addClass('alpha');
                $(".portfolio-list .portfolio-3s:nth-child(3n)").addClass('omega');
                if($('.portfolio-list')) portfolioZindex();
            });
    		
	});
    
	$('.filter_navi li a').eq(0).click();	
	
}
function portfolioZindex(){
    
    var portfolio2 = $('.portfolio-list > .portfolio-2');

    for( var i = 0; i < portfolio2.length; i+=2 ) {
        portfolio2.slice(i, i+2).children('.portfolio-item').css('z-index', 1000-i);
    }
    
    var portfolio3 = $('.portfolio-list > .portfolio-3');

    for( var i = 0; i < portfolio3.length; i+=3 ) {
        portfolio3.slice(i, i+3).children('.portfolio-item').css('z-index', 1000-i);
    }
    
    var portfolio4 = $('.portfolio-list > .portfolio-4');

    for( var i = 0; i < portfolio4.length; i+=4 ) {
        portfolio4.slice(i, i+4).children('.portfolio-item').css('z-index', 1000-i);
    }
    
    var portfolio3s = $('.portfolio-list > .portfolio-3s');

    for( var i = 0; i < portfolio3s.length; i+=3 ) {
        portfolio3s.slice(i, i+3).children('.portfolio-item').css('z-index', 1000-i);
    }

      $(".portfolio-item").mouseenter(function() {
        $( this ).parent('.portfolio-2').next().children('.portfolio-item').css('z-index', $( this ).parent('.portfolio-2').next().children('.portfolio-item').css("z-index")-10);
        $( this ).parent('.portfolio-3').next().children('.portfolio-item').css('z-index', $( this ).parent('.portfolio-3').next().children('.portfolio-item').css("z-index")-10);
        $( this ).parent('.portfolio-4').next().children('.portfolio-item').css('z-index', $( this ).parent('.portfolio-4').next().children('.portfolio-item').css("z-index")-10);
        $( this ).parent('.portfolio-3s').next().children('.portfolio-item').css('z-index', $( this ).parent('.portfolio-3s').next().children('.portfolio-item').css("z-index")-10);
        
        
      }).mouseleave(function(){
        $( this ).parent('.portfolio-2').next().children('.portfolio-item').css('z-index', $( this ).parent('.portfolio-2').next().children('.portfolio-item').css("z-index"));
        $( this ).parent('.portfolio-3').next().children('.portfolio-item').css('z-index', $( this ).parent('.portfolio-3').next().children('.portfolio-item').css("z-index"));
        $( this ).parent('.portfolio-4').next().children('.portfolio-item').css('z-index', $( this ).parent('.portfolio-4').next().children('.portfolio-item').css("z-index"));
        $( this ).parent('.portfolio-3s').next().children('.portfolio-item').css('z-index', $( this ).parent('.portfolio-3s').next().children('.portfolio-item').css("z-index"));
    
        for( var i = 0; i < portfolio2.length; i+=2 ) {
            portfolio2.slice(i, i+2).children('.portfolio-item').css('z-index', 1000-i);
        }
    
        for( var i = 0; i < portfolio3.length; i+=3 ) {
            portfolio3.slice(i, i+3).children('.portfolio-item').css('z-index', 1000-i);
        }
        
        for( var i = 0; i < portfolio4.length; i+=4 ) {
            portfolio4.slice(i, i+4).children('.portfolio-item').css('z-index', 1000-i);
        }
        
        for( var i = 0; i < portfolio3s.length; i+=3 ) {
            portfolio3s.slice(i, i+3).children('.portfolio-item').css('z-index', 1000-i);
        }
    
      });

}
function portfolioItem() {

    $(".portfolio-item").children('.portfolio-wrap').addClass('add');
    $(".portfolio-item").addClass('addBg');
    
  $(".portfolio-item").mouseenter(function() {
    $( this ).animate({boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'}, 200);
    $( this ).switchClass( "addBg", "removeBg", 200 );
    $( this ).children('.portfolio-wrap').switchClass( "add", "remove", 400 );
    
  }).mouseleave(function(){
    $( this ).animate({boxShadow: '0 0 0'}, 200);
    $( this ).switchClass( "removeBg", "addBg", 200 );
    $( this ).children('.portfolio-wrap').switchClass( "remove", "add", 400 );

  });
    
}

function sloganButton() {
    
    var moduleHeight = $('.slogan .style2 .grid_4').prev('.grid_12').height();
    var bnHeight = $('.slogan .style2 .grid_4 p').height();
    var Height = moduleHeight-bnHeight;
    
    $(".slogan .style2 .grid_4").css('paddingTop', Height/2);

}