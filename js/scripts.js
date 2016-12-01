// My Scripts

//Spokane//
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.cheney .temp').text(weather.temp);
      $('.cheney .city').text(weather.city);
      $('.cheney img').attr('src', weather.image);
      $('.cheney title').text(weather.title);
      
      //if this condition, use this icon//
        
        if ( 26>= && weather.code && 30 <= weather.code){
           $('.spokane .wi').add('wi-day-cloudy'); 
            
            
            
            
        }
        
        
        
        
        
        
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived  
        
        $('body').append('<p>NO WEATHER</p>');
    }
  });




//Seattle//
$.simpleWeather({
    location: '98105',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp);
      $('.seattle .city').text(weather.city);
      $('.seattle img').attr('src', weather.image);
    $('.seattle title').text(weather.title);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        
        $('body').append('<p>NO WEATHER</p>');
    }
  });




//GEO//
$.simpleWeather({
    location: '99352',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
      $('.geo title').text(weather.title);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        
        $('body').append('<p>NO WEATHER</p>');
    }
    
    
    
    
  });


$('.geo button').click( function(position) {
    navigator.geolocation.getCurrentPosition( function(position) {
  
  // wait a few seconds to receive location
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  console.log( lat, long); 
    });
});


                           
                           
                           
                        
 })







