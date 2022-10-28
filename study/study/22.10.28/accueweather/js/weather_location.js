var currentURL = location.href  //url 주소를 가져온다

var urlObj = new URL(currentURL)

var params = urlObj.searchParams
var q = params.get('q')

console.log(q)

var result = getCurrentWeather(q)
console.log(result)

//데이터 바인딩 (제이쿼리)
$('#temp').text(result.main.temp + 'C')
$('#wind').text(result.wind.speed + 'm/s')
$("#humidity").text(`${result.main.humidity}%`);