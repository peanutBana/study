//모바일 햄버거 버튼 클릭 시 열림
$('.hamburger').click(function(){
    $('.mobile.hamburger').hide()   //display : none
    $('.mobile.close').show()   //display : block

    var nav = $('.nav').clone()

    $('#mobile_menu').append(nev)
    $('#mobile_menu').show()

})
//모바일 햄버거 버튼 닫기
$('.close').click(function(){
    $('.mobile.hamburger').show()   //display : block
    $('.mobile.close').hide()    //display : none
})
