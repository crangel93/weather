var getWeather = function () {
  // format the github api url
  var city2=document.querySelector("#city").value;
  alert(city2);
  var city="boston";
  
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q="+city2+"&appid=b7d95a22a77bcae92910a5fb48b8821e";

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};
getWeather()