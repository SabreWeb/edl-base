// EDL JS FUNCTIONS
jQuery( document ).ready(function($) {
// Fix header to top on scroll down
$.fn.edl_headerTotop = function(){
    window.addEventListener( 'scroll', function()
{
    //...
    if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
        element.style.top = '0px';

    else if( wScrollDiff > 0 ) // scrolled up; element slides in
        element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';

    else if( wScrollDiff < 0 ) // scrolled down
    {
        if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
            element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';

        else // scrolled down; element slides out
            element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
    }
    //...
});
};
// Hide Header on on scroll down
$.fn.edl_headerScroll = function(){
    // Variables
    var $this = $(this);
    var didScroll;
    var lastScrollTop = 0;
    var delta = 0;
    var navbarHeight = $this.outerHeight();
    $(window).scroll(function(event){
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $this.removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $this.removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }
};

// ANIMATE UTILITY NAV
$.fn.edl_utility = function(){
    $(document).scroll(function() {
        if ($(document).scrollTop() > 300) {
    		$('.edl-header').addClass('hide-utility');
            $('.edl-nav--utility-spacer').hide();
        } else {
        	$('.edl-header').removeClass('hide-utility');
            $('.edl-nav--utility-spacer').show();
        }
    });
};
// Mega Navigation
$.fn.edl_meganav = function(){
    $(this).click(function() {
        $('.edl-nav--mega').toggleClass('show-mega');
        $('body').toggleClass('noscroll');
        $(this).find('i').toggleClass('edl-icon--close');
        return false;
    });
    $('.edl-nav--mega a').click(function(){
        $('.edl-nav--mega').removeClass('show-mega');
        $('body').removeClass('noscroll');
    });
};
// Accordion
$.fn.edl_accordion = function(){
    // Set your action element
    var action = $('.edl-accordion--action');
    // Set you hidden content element
    var moredetails = $('.edl-accordion--content');
    $(action).click(function(){
        if (!$(this).hasClass('active')){
            $(action).removeClass('active');
            $(this).parent().parent().find(moredetails).slideUp(150).removeClass('active');
            $(this).parent().find(moredetails).slideDown(150).addClass('active');
            $(this).addClass('active');
        } else {
            $(action).removeClass('active');
            $(this).parent().parent().find(moredetails).slideUp(150).removeClass('active');
        }
        return false;
    });
};
// Expand & Collapes
$.fn.edl_expand = function(){
    // Set your action element
    var action = $('.edl-expand--action');
    $(action).click(function(){
        var moredetails = $(this).parent().children('.edl-expand--content');
        var viewmore = $(this);
        var txt = moredetails.is(':visible') ? 'View more +' : 'View less -';
        $(this).parent().find(viewmore).text(txt);
        $(this).parent().parent().find(moredetails).slideToggle(150);
        return false;
    });
};
// Expand & Collapes list
$.fn.edl_expand_list = function(){
    // Set your action element
    var action = $('.edl-expand--list-action');
    $(action).click(function(){
        var moredetails = $(this).parent().children('.edl-expand--list-content');
        var viewmore = $(this);
        $(this).parent().find(moredetails).slideToggle(150);
        $(this).toggleClass('active');
        return false;
    });
};
// Tabs
$.fn.edl_tabs = function (){
    var $this = $(this);
    $(".edl-tab--nav li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $(".edl-tab--nav li.active").removeClass("active");
            $(this).addClass("active");
            $(".edl-tab--panels li.active").removeClass("active");
            $(".edl-tab--panels li:nth-child("+nthChild+")").addClass("active");
        }
    return false;
    });
};
// Form text inputs
$.fn.edl_form_input = function (){

    // Find inputs
    var inputs = $(this).find('input, textarea, select');

    // Find labels
    var labels = $(this).find('label.edl-label');
        $(labels).parent().css('position', 'relative');

    // Set active class
    var active = "has-value";

    // For each input
    $(inputs).each(function(){
        // On focus
        $(this).focus(function() {
            if(!$(this).val()) {
                $(this).parent().find(labels).addClass(active);
            }
        });

        // On blur
        $(this).blur(function() {
            if($(this).val()) {
                $(this).parent().find(labels).addClass(active);
            } else {
                $(this).parent().find(labels).removeClass(active);
            }
        });
    });
};
// Notices
$.fn.edl_notice = function (){
    $(this).click(function(){
        $('.edl-notice').hide();
        return false;
    });
};
});
