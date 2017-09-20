// ON DOCUMENT READY
$( document ).ready(function() {
    $('.edl-header').edl_headerScroll();
    $('.edl-notice--icon').edl_notice();
    if($('.edl-nav--utility').is(':visible')) {
        $('.edl-header').edl_utility();
    }
    $('.edl-hamburger a').edl_meganav();
    $('.edl-accordion').edl_accordion();
    $('.edl-expand').edl_expand();
    $('.edl-expand--list').edl_expand_list();
    $('.edl-tab').edl_tabs();
    $('.edl-form').edl_form_input();
});
