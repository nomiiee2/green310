$(document).ready(function(){


// 헤더 가로값

$('header').width('200px')
let hw = $('header').width()
let wid = $(window).width()
console.log(wid)
$('section').width(wid-hw)





// 팝업

$('.pop span').click(function(){

    $('.pop').css('display','none')

})




    //메뉴 토글
$('.menu>li').mouseover(function(){
    $('.sub',this).slideDown()
})

$('.menu>li').mouseleave(function(){
    $('.sub',this).slideUp()
})


// 헤더/섹션 분할 헤더 : 200px

// 슬라이드

$('.thum li').click(function(){
    let i = $(this).index()

    // console.log(i)
    $('.img li').eq(i-1).css('top','0').stop().animate({'top':'100%'},800)
    $('.img li').eq(i).css('top','-100%').stop().animate({'top':'0'},800)
    $('.thum li').removeClass('on')
    $(this).addClass('on')
});



let a = 0;
setInterval(function(){
    a++;
    if(a==3)a=0;
    $('.thum li').eq(a).trigger('click')
},3000)






// 탭

$('.title li').click(function(){

    let ii = $(this).index()
    // console.log(ii)

    $('.con li').removeClass('on')
    $('.con li').eq(ii).addClass('on')

    $('.title li').removeClass('on')
    $('.title li').eq(ii).addClass('on')
})










}); //끝