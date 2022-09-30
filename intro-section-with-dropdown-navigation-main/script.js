//Features drop-down 
var a = $(".menu_1");
var b = $(".menu_2");
var x = $(".suba_1");
var y =  $(".suba_2");


$("#features").hover(function (e) { 
    e.preventDefault();
    setTimeout(function(){
        $(".suba_1").toggleClass("supersuba")
    },2000);
});

$("#company").hover(function (e) { 
    e.preventDefault();
    setTimeout(function(){
        $(".suba_2").toggleClass("supersuba2")
    },500);
});

$(".hamburger").click(function (e) { 
    e.preventDefault();
    $(".kid").toggleClass("kidominant")
});
