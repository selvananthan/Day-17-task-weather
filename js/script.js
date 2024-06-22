getweather = function(la,lo) {
    let output={};
    console.log("scriptloa");
    var lat=la
    var lon=lo
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=644562c1ba6cf43e7cfdb45d501fa110`
    let res= fetch(url).then((response)=>{
  return response.json();
}).then((data) => {
    console.log(data,"weather data");
    return data
  })
  console.log(res);
   return res
 }
document.querySelectorAll('.weather-btn1').forEach(button => {
    button.addEventListener('click', async () => {
     var result= await  getweather(56.130367,-106.346771)
     console.log(result.weather[0].description,"in event listener functiojn")
     let msg= 
              `  Main : ${result.weather[0].main} 
  Description : ${result.weather[0].description} 
  ID : ${result.weather[0].id}`
        alert(msg);
    });
});

document.querySelectorAll('.weather-btn2').forEach(button => {
    button.addEventListener('click', async () => {
        var result= await  getweather(37.090240,-95.712891)
        console.log(result.weather[0].description,"in event listener functiojn")
     let msg= 
              `  Main : ${result.weather[0].main} 
  Description : ${result.weather[0].description} 
  ID : ${result.weather[0].id}`
        alert(msg);
    });
});

document.querySelectorAll('.weather-btn3').forEach(button => {
    button.addEventListener('click', async () => {
        var result= await  getweather(20.593683,78.962883)
        console.log(result.weather[0].description,"in event listener functiojn")
     let msg= 
              `  Main : ${result.weather[0].main} 
  Description : ${result.weather[0].description} 
  ID : ${result.weather[0].id}`
        alert(msg);
    });
});
getweather(20.5937,78.9629);