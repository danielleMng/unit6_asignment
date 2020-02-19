"use strict";
(function(){
    var url="https://api.weatherbit.io/v2.0/current?city=yaounde,CAMEROON&key=API_KEY";
    var apiKey="b9169be6ca824b9781734c8c52a01ead";
    var httpRequest;

    function makeRequest(){
        httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url + '&appid=' + apiKey);
        httpRequest.send();
    }
    function responseMethod(){
        if ( httpRequest.readyState===4)
    }

})();