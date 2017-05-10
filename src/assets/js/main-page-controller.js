//Controlling Active State for Link
$(document).ready(function(){
  $('a').click(function(){
    $('a').removeClass("active");
    $(this).addClass("active");
});
});

$(document).ready(function(){
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 200) {
                $('#scrollIcon').fadeOut();
            } else {
                $('#scrollIcon').fadeIn();
            }
        });
    });
});

