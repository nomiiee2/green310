$(document).ready(function(){
let imgs = '';


    // for = 반복문!!  

    for(var i=0; i<200; i++){
        imgs+= '<img src="img/pic'+i+'.jpg" alt="">';
    } // += 1개씩 
    

    

    $('section').html(imgs);



    // 마우스를 움직일 때 마다 한장씩 사진이 보여라

    

    $('section').mousemove(function(e){
        let x = e.pageX,
            wd = $(window).width()

            // $('h1').text(x)
        let percent = Math.floor((x/wd)*200)  // floor 자연수
        $('h1').text(percent)

        $('section>img').hide()
        $('section>img').eq(percent).show()
    })


















}) // 끗