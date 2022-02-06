var getWeather = function () {
  // format the github api url
  var city2=document.querySelector("#city").value;
  var cityDisplay=document.querySelector("#cityCurrent")
  var d= new Date();
  cityDisplay.textContent=city2 +"("+d+")";
  //alert(city2);
  var city="boston";
  
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q="+city2+"&units=imperial&appid=b7d95a22a77bcae92910a5fb48b8821e";
//alert(apiUrl);
  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
    console.log(data);
    var currentTemp=document.querySelector("#temp");
    currentTemp.textContent="Temp: "+data.main.temp+" °F";
    var currentHumid=document.querySelector("#humid");
    currentHumid.textContent="Humidity: "+data.main.humidity+" %";
    //var currentUv=document.querySelector("#uv");
    //currentUv.textContent="Humidity: "+data.main.humidity;
    var currentWind=document.querySelector("#wind");
    currentWind.textContent="Wind: "+data.wind.speed+" MPH";
    
    });
  });
 
  
}



;
//getWeather();