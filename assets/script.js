var place = document.getElementById("citySearch").value;
var searchBtn = document.getElementById("submit");
var dayOne = document.getElementById("card-1");
var dayTwo = document.getElementById("card-2");
var dayThree = document.getElementById("card-3");
var dayFour = document.getElementById("card-4");
var dayFive = document.getElementById("card-5");

function weatherDisplay() {
  var city = document.getElementById("citySearch").value;
  var url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=049e3cef61e3ece1b6e80fbf3023437c`;


  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      cityApi(data[0].lat, data[0].lon);
    });
}

function cityApi(lat, lon) {
  var cityApi = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=049e3cef61e3ece1b6e80fbf3023437c`;

  fetch(cityApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      fiveDay(data);
    });
}

function fiveDay(data) {
  var rightSide = document.getElementById('right-side');
  for(var i = 0; i < data.list.length; i += 8) {
    console.log(data.list[i]);
    var headerOne = document.createElement('div');
    var weather = document.createElement('div');
    var weatherBody = document.createElement('div');
    headerOne.classList.add('header');
    weather.classList.add('card');
    headerOne.textContent = data.list[i].dt_txt.substring(0,11);
    weatherBody.textContent = data.list[i].main.temp;
    weather.appendChild(weatherBody);
    weather.appendChild(headerOne);
    rightSide.appendChild(weather);
    

  }
}
searchBtn.addEventListener("click", weatherDisplay);
