$(document).ready(function(){
    $(".authBtn").on("click",function(){
            
        //get id of the clicked button
            var id = $(this).attr("id");
            
        //animate entrance of div 
        $("."+id).addClass("animated fadeInUp");
        // remove the above line if you don't want the animations
        // to find more animations see at https://daneden.github.io/animate.css/ 
            
        //use id to target show the selected section and hide the others
        $("."+id).show().siblings().hide();

        //keep signup and login buttons visible
        $(".navBtn").show();
    });
});