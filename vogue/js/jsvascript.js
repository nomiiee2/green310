$(document).ready(function(){
    
    // 메뉴버튼을 클릭 했을때, nav와 section이 바뀌어라

    $('#wrap em').click(function(){

        $('#wrap nav').addClass('on');
        $('#wrap section').addClass('on')
        
        // 본인 스스로는 서서히 사라져라
        $(this).fadeOut('slow')
    })

    // gnb의 li를 클릭 했을 때, 본인의 순번을 찾고 
    // section 에 div의 순번을 맞추어 on값을 주어라

    $('.gnb li').click(function(){
        let i = $(this).index()
        console.log(i);
        $('section div').removeClass('on')
        $('section div').eq(i).addClass('on')


        $('#wrap nav').removeClass('on');
        $('#wrap section').removeClass('on');
        $('#wrap em').fadeIn()
    })
})