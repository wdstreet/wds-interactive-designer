//Controlling Active State for Link
$(document).ready(function(){
  $('a').click(function(){
    $('a').removeClass("active");
    $(this).addClass("active");
});
});

