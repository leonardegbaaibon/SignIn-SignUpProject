$(document).ready(function(){
    $(".toggle-li").on("click",function(){
        $("body").toggleClass("leto")
        $(".aside").css("background-color","rgb(186, 248, 192)")
        $(".toggle-da").css("background-color","rgb(186, 248, 192)")
        $(".toggle-li").hide()
        $(".toggle-da").show()
        $(".footer").css("background-color","rgb(8, 26, 1)")
        $(".footer").css("color","white")
    });
});
$(document).ready(function(){
    $(".toggle-da").on("click",function(){
        $("body").toggleClass("leto")
        $(".aside").css("background-color","white")
        $(".toggle-da").hide()
        $(".toggle-li").show()
        $(".footer").css("background-color","rgb(229, 250, 220)")
        $(".footer").css("color","black")
    });
});
$(document).ready(function(){
    $(".toggle-da").hide()
})
