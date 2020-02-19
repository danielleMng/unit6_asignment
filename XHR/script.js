"use strict";
(function(){
    var url="https://api.weatherbit.io/v2.0/current?city=Yaounde&key=b9169be6ca824b9781734c8c52a01ead";
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
        if ( httpRequest.readyState===4){
            console.log(httpRequest.responseText);
        }
    }

})();