let place = document.getElementById("citySearch").value;
let searchBtn = document.getElementById('submit');
async function weatherDisplay () {
    let city = document.getElementById('citySearch').value;
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=049e3cef61e3ece1b6e80fbf3023437c` 
    
    // fetch(url)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    cityApi(data[0].lat, data[0].lon);
    // .then(function (response){
    //     return response.json();
    // })
    // .then(function (data){
    //     console.log(data);
    //     cityApi(data[0].lat, data[0].lon);
    // })
};

function cityApi(lat,lon) {
    let cityApi =`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=049e3cef61e3ece1b6e80fbf3023437c`

    fetch(cityApi)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
};



searchBtn.addEventListener('click', weatherDisplay);