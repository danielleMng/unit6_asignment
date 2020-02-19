"use strict";
(function(){
    var url="https://api.weatherbit.io/v2.0/current?city=Yaounde&country=CAMEROON&key=b9169be6ca824b9781734c8c52a01ead";
    var apiKey="b9169be6ca824b9781734c8c52a01ead";
    var httpRequest;
    makeRequest();

    function makeRequest(){
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = responseMethod;
        httpRequest.open('GET', url + '&appid=' + apiKey);
        httpRequest.send();

    }
    function responseMethod(){
        if (httpRequest.readyState===4){
            if( httpRequest.status===200){
                updateUISuccess(httpRequest.responseText);
            }else{
               updateUIError();
            }
            console.log(httpRequest.responseText);
        }
    }
    function updateUISuccess(responseText){
        var response = JSON.parse(responseText);
        var condition = response.weather[0].main;
        var degC = response.main.temp - 273.15;
        var degCInt= Math.floor(degC);
        var degF= degC * 1.8 + 32;
        var degFInt= Math.floor(degF);
        var weatherBox = document.getElementById("weather");
        weatherBox.innerHTML="<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F </p><p>" + condition + "</p>"


    }
    function updateUIError(){
         var weatherBox= document.getElementById("weather");
         weatherBox.className="hidden";
    }
})();