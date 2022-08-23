function initMap() {
    const opt = {
        center: {lat: 50.0013911, lng: 36.2329744},
        zoom: 10
    };

    const map = new google.maps.Map(document.getElementById("map"), opt);
}