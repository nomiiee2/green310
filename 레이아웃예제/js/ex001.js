$(document).ready(function(){

    // 사이트를 열자마자 이루어지는 이벤트

    $('.popUp span').click(function(){
        $('.popUp').css({'display':'none'})
        // $('.popUp').fadeOut()
        // $('.popUp').hide()
    })




    // 일정시간이 지나면 동작이 이루어져라

    setTimeout(function(){
        $('.mainImg').addClass('on')
    },1000)








    // 스크롤을 했을때 이루어지는 이벤트

    // hero글씨가, 브라우저와 맞닿았을때, (스크롤했을때), 
    // mainImg가 사라져라

    $(window).scroll(function(){
        // 스크롤값 구하기
        let sc = $(this).scrollTop()
        $('nav li').eq(0).text(sc)

        let hot = $('#heroTxt').offset().top;   // offset > 절대값
        $('nav li').eq(1).text(hot)
    
        
        
        if(sc>=hot) {
        
            $('.mainImg').addClass('hold')
        }
        // 조건문에 동일 수 불가능!! 0  /  = (같다)는 중복 불가능, 하나의 조건문에는 들어가야함!
        if(sc<hot) {
            
            $('.mainImg').removeClass('hold')
        }
    })






}); //끗