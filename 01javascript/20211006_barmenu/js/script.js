function cmn(_menu){

    if(_menu == "main"){
        $(".bar").css("opacity",0)
        console.log("connected");
    }else{
        $(".menu li").eq(_menu).addClass("active")
        $(".bar").css("left",200*_menu)
        console.log("subpage")
    }

    $(".menu li").hover(function(){

        let menuli = $(this).index()
        $(this).css("background-color","whitesmoke")
        if(_menu == "main"){
            $(".bar").css("opacity",1);
        }
        $(".bar").css("left",200*menuli)

    },function(){
        
        $(this).css("background-color","initial")
        if(_menu == "main"){
            $(".bar").css("opacity",0)
        }
        $(".bar").css("left",200*_menu)

    })
}

// $(".menu li").hover(function(){},function(){})