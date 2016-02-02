function findMe() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var map;
      function newMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 10
        });
        var marker = new google.maps.Marker({
          position: {lat: latitude, lng: longitude},
          map: map,
          title: 'You are here'
        });
      }
      newMap();
    });       
  } else {
    alert("Sorry, your browser doesn't support geolocation.");
    return;
  }
};