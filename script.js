// // {"coord":{"lon":72.8479,"lat":19.0144},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":24.99,"feels_like":25.24,"temp_min":24.99,"temp_max":24.99,"pressure":1011,"humidity":65},"visibility":2500,"wind":{"speed":2.06,"deg":330},"clouds":{"all":7},"dt":1642169450,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1642124668,"sunset":1642164609},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}





let weather = {
  apiKey: "a03ea7e62eeeb2394f8e7630223cce73",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
       +city+
       "&units=metric&appid="+
      this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayweather(data))

  },
  displayweather:function( data){
    const {name} = data;
    const {temp} = data.main;
    const {description} = data.weather[0];
    const {humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,temp,description,humidity,speed)
    document.querySelector(".city").innerHTML = name;
    document.querySelector(".temp").innerHTML = temp;
    document.querySelector(".desc").innerHTML = description;
    document.querySelector(".humidity").innerHTML = "Humidity :"+ humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind speed :" +speed +" km/hrs";

  },
  search:function(){
    this.fetchWeather(document.querySelector(".search-input").value);
  }





}

document.querySelector(".search-btn").addEventListener('click',()=>{
  weather.search();
})


document.querySelector(".search-input").addEventListener('keyup',(e)=>{

  if(e.key == "Enter" ){
    weather.search();
  }

})
// weather.fetchWeather("mumbai")








































