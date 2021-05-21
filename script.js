$(document).ready(function() {
    var target = $(location).attr("hash");
    var offset = ($(this).attr('data-offset') ? $(this).attr('data-offset') : 0);
    $('body,html').animate({
        scrollTop: $(target).offset().top - offset
    }, 1000);
});