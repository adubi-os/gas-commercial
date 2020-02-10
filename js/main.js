$(document).ready(function(){

    $('.menu-toggle').on('click', function () {
        $('.menu-collapse').slideDown(700);
      });
    $('.close-menu-collapse, .sidebar-menu a, .sidebar-menu button').on('click', function () {
    $('.menu-collapse').slideUp(700);
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
        });
        $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
        });
    
    // Header fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
        $('#sticky-header').addClass('header-fixed');
        } else {
        $('#sticky-header').removeClass('header-fixed');
        }
    });

    /*==================================================================
    [ Focus input ]*/
    $('.contact-input').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1200,
        offset: 70
    });

});

var coll = document.getElementsByClassName("question-answer");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("qactive");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}