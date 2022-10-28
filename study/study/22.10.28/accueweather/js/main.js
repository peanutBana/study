var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$('.temp').each(function(idx){
    var temp = getCurrentTemp(cityList[idx])
    var iconURL = 'https://openweathermap.org/img/wn/'
    $(this).text(temp.celsius + " ℃")
    $(this).prev().children().attr('src', iconURL + temp.icon + ".png")
})

$('.location').on({
    'click' : function(){
        var q = $(this).children('.q').attr('id')
        var redirectURL = "pages/weather_location.html?q=" + q
        location.href = redirectURL
    }
})

// $('.location').on({     //.on은 여러가지 이벤트를 만들때 사용됨
//     'click' : function() {      //click 이벤트 생성
//         var q = $(this).children('.q').attr('id')    //this는 여러가지 location 중에 어느것인지는 아직 모른다
//         var redirectURL = 'pages/weather_location.html?q=' + q  //경로와 q가 합쳐지기에 부산을 선택하면 부산이 생성된다
//         location.href = redirectURL //
//     }
// })