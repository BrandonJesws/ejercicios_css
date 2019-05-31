
$(document).ready(function(){
    $(".main").click(function(){
        $(".main").animate({height:'800px', width:'800px'});
        $(".menu ul").delay(300).animate({opacity:"1"});
        $(".menu ul").css("visibility","visible");
        $(".circle_layer").animate({height:'850px',width:'850px'});
    });
});