window.addEventListener('load',function() {

    navigator.geolocation.getCurrentPosition(success, error);
    

    function success(pos)
    {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error()
    {
        console.log("error");
    }

    function weather(lat, long) 
    {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}&units=imperial`;
       

        $.getJSON(URL, function(data){
            console.log(data);
            update(data);
        });
    }
    

    function update(data) 
    {
        var city = data.name;
        //rounded temperature
        var country = data.sys.country;

        var temp = Math.round(data.main.temp);
        //description
        var desc = data.weather[0].description;
        var descTwo = data.wind.speed;
       
        

        //displaying current city
        $("#city").html(city);
        $("#country").html(country);

        //diplaying current temperature
        $("#temp").html(temp);
        //weather description
        $("#description").html(desc + " | Wind Speed: " + descTwo);


    }


});