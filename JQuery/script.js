"use strict";


(function(){
    var url = "https://api.weatherbit.io/v2.0/current?city=Yaounde&country=CAMEROON&key=b9169be6ca824b9781734c8c52a01ead";
    var apiKey = "b9169be6ca824b9781734c8c52a01ead"; 
    $.get(url+ '&appid='+ apiKey).done(function(response){
        updateUISucess(response);

    }).fail(function(error){
         updateUIError();
    });
    function updateUISucess(response){
        var condition=response.weather[0].main;
        var degC= response.main.temp - 273.15;
        var degCInt=Math.floor(degC);
        var degF= degC * 1.8 + 32;
        var degFInt=Math.floor(degF);
        var $weatherBox= $("#weather");
        $weatherBox.append("<p>"+ degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
    }
    function updateUIError(){
                var $weatherBox= $("#weather");
                $weatherBox.addClass("hidden")
            }
})();