
$(document).ready(function(){
   $("#topBar").addClass("logo-bar");
    
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('#topBar').removeClass("logo-bar");
            } else {
                $('#topBar').addClass("logo-bar");
            }
        });
    });
});