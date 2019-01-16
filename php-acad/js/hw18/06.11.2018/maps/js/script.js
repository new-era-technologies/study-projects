'use strict';


function initMap() {
    let arrayOfPlaces = [{lat: 50.450406, lng: 30.524730}, {lat: 49.587990, lng: 34.546578}, {lat: 49.838838, lng: 24.026324}];
    let center = {lat: 50.450406, lng: 30.524730};

    let map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 7
    });

    let markers = arrayOfPlaces.map((location) => {
        return new google.maps.Marker({
            map: map,
            position: location
        });
    });
}