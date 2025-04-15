"use strict";
$(function(){

    $(".wrap-5 .btn").click(function(){ 
        $(".wrap-5 .btn").removeClass("active");
        $(this).addClass("active");

        if( $(this).text()=="All" ){
            $(".wrap-5 .all").fadeIn();  
        }
        else if( $(this).text()=="Website" ){
            $(".wrap-5 .all").fadeOut(0);  
            $(".wrap-5 .website").fadeIn();  
        }
        else{ 
            $(".wrap-5 .all").fadeOut(0);  
            $(".wrap-5 .brand").fadeIn();  
        }
    });

    $(".wrap-5 .more").click(function(){
        $(this).toggleClass("fa-minus-circle")
        $(".wrap-5 .all:nth-child(7),.wrap-5 .all:nth-child(8),.wrap-5 .all:nth-child(9)").slideToggle();
    });

    $(".wrap-7 .more").click(function(){
        $(this).toggleClass("fa-minus-circle")
        $(".wrap-7 .all:nth-child(4),.wrap-7 .all:nth-child(5),.wrap-7 .all:nth-child(6)").slideToggle();
    });


    $(".accordion a").click(function(e){
        e.preventDefault();

        if( $(this).hasClass("active") ){
            $(this).removeClass("active");
            $(this).next("p").slideUp();
        }
        else{
            $(".accordion a").removeClass("active");
            $(".accordion p").slideUp();

            $(this).addClass("active");
            $(this).next("p").slideDown();
        }

    });


    $("header .menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
    });

    if(screen.width<768){
        $("nav a").click(function(){ 
            $(".collapse").slideUp();
            $(".menu").removeClass("active");
         })
       
    };


    $(".signup").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popover"></div>`);
        $("body").css({"overflow-y":"hidden"});
        const form=$(".hiddenform").html();
        $(".popover").append(form);
        $(`.popover input[type="text"]`).trigger("focus");


        $(".popover").submit(function(e){
            e.preventDefault();
            alert("submit");
            // fetch("/signup",{method:"POST",body:JSON.stringify({})}).then(i=>i.json()).then(i=>console.log(i));
            $(".popover,.overlay").remove(); 
            $("body").css({"overflow-y":"auto"});
        })

        
        

        $(".close").click(function(){
            $(".popover,.overlay").remove(); 
            $("body").css({"overflow-y":"auto"});
        });

        $(window).keyup(function(e){
            if(e.which==27){  
                $(".popover,.overlay").remove(); 
                $("body").css({"overflow-y":"auto"});
             }
        })

    });


    $(".video button,.video a").click(function(e){
        e.preventDefault();

        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popover"></div>`);
        $("body").css({"overflow-y":"hidden"});
        $(".popover").append(`<button aria-label="Close Model" class="close"><span class="fa fa-times"></span></button><iframe width="720" height="406" src="https://www.youtube.com/embed/n0iBCQklw1A?si=HeKOS431FTbJVyVU" title="JavaScript Introduction" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);

        $(".close, .overlay").click(function(){
            $(".popover,.overlay").remove(); 
            $("body").css({"overflow-y":"auto"});
        });

        $(window).keyup(function(e){
            if(e.which==27){  
                $(".popover,.overlay").remove(); 
                $("body").css({"overflow-y":"auto"});
             }
        })

    });

    $(".wrap-13 button").click(function(){
        $("html,body").animate({
            scrollTop:0
        },400)
    })

    $(".reviews").bxSlider({
        controls:false
    });

});  