var url = 'https://api.openweathermap.org/data/2.5/weather?';
url += 'appid=3d8714e48c4b653b9c380a64201ff5fa';
url += '&units=metric';
url += '&lang=kr';
url += '&q=';

// 현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city){
    var dataObj;
    var openWeatherAPI = url;           

    $.ajax({
        type: 'GET',        //서버에 get방식으로 요청함 (주소에 쿼리스트링 => get 방식)
        url: openWeatherAPI += city,
        dataType: 'json',       //반환받는 데이터 타입
        async: false,         //비동기: false =>  동기 (결과 데이터를 return시키기 위해서)
        success: function(data){        //API Call 성공시
            //console.log(data);
            //console.log(data.name);
            //console.log(data.weather[0].description);
            dataObj = data;
        },      
        error: function(request, status, error){         //API Call 실패시
            console.log(request, status, error);
        },       
    })
    return dataObj
}   



function getCurrentTemp(city){
    var temp = {};
    var openWeatherAPI = url

    $.ajax({
        type: 'GET',       
        url: openWeatherAPI += city,
        dataType: 'json',       
        async: false,         
        success: function(data){        
            temp.celsius = (data.main.temp).toFixed(0)
            temp.icon = data.weather[0].icon
        },      
        error: function(request, status, error){         
            console.log(request, status, error);
        },       
    })
    console.log(temp);
    return temp
   
}