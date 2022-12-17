const comBack = document.querySelector('button');
console.log('Height:' + window.screen.height + 'px');
console.log('Width:' + window.screen.width + 'px');

comBack.addEventListener("click", function () {
    window.history.back()
},
);


function initMap() {
    const myPlace = { lat: 48.431104, lng: 35.0191616 };
    const myMap = new google.maps.Map(document.getElementById("map"), {
        center: myPlace,
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        map: myMap,
        position: myPlace,
    });

    console.log('Широта: ' + myPlace.lat);
    console.log('Довгота: ' + myPlace.lng);
}


// navigator.geolocation.getCurrentPosition(position => {
//     const { latitude, longitude } = position.coords;
//     // Show a map centered at latitude / longitude.
//     console.log('Широта: ' + position.coords.latitude);
//     console.log('Довгота: ' + position.coords.longitude);

// });