function searchCity(){
   
   var city= document.querySelector("#city").value;
   var currentCity=document.querySelector("#cityCurrent");
   fetch("api.openweathermap.org/data/2.5/weather?q={modesto}&appid={b7d95a22a77bcae92910a5fb48b8821e}")
   .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
  alert(data);
   currentCity.innerHTML= city;
  

   



}
var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "api.openweathermap.org/data/2.5/weather?q={modesto}&appid={b7d95a22a77bcae92910a5fb48b8821e}";

  // make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};
getUserRepos();