function initMap() {
    const pos = {lat: 50.00190, lng: 36.23527};
    const opt = {
        center: pos,
        zoom: 17,
        styles:[
{
"featureType": "all",
"elementType": "labels.text.fill",
"stylers": [
    {
        "saturation": 36
    },
    {
        "color": "#000000"
    },
    {
        "lightness": 40
    }
]
},
{
"featureType": "all",
"elementType": "labels.text.stroke",
"stylers": [
    {
        "visibility": "on"
    },
    {
        "color": "#000000"
    },
    {
        "lightness": 16
    }
]
},
{
"featureType": "all",
"elementType": "labels.icon",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "administrative",
"elementType": "geometry.fill",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 20
    }
]
},
{
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 17
    },
    {
        "weight": 1.2
    }
]
},
{
"featureType": "administrative",
"elementType": "labels",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "administrative.country",
"elementType": "all",
"stylers": [
    {
        "visibility": "simplified"
    }
]
},
{
"featureType": "administrative.country",
"elementType": "geometry",
"stylers": [
    {
        "visibility": "simplified"
    }
]
},
{
"featureType": "administrative.country",
"elementType": "labels.text",
"stylers": [
    {
        "visibility": "simplified"
    }
]
},
{
"featureType": "administrative.province",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "administrative.locality",
"elementType": "all",
"stylers": [
    {
        "visibility": "simplified"
    },
    {
        "saturation": "-100"
    },
    {
        "lightness": "30"
    }
]
},
{
"featureType": "administrative.neighborhood",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "landscape",
"elementType": "all",
"stylers": [
    {
        "visibility": "simplified"
    },
    {
        "gamma": "0.00"
    },
    {
        "lightness": "74"
    }
]
},
{
"featureType": "landscape",
"elementType": "geometry",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 20
    }
]
},
{
"featureType": "landscape.man_made",
"elementType": "all",
"stylers": [
    {
        "lightness": "3"
    }
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 21
    }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
    {
        "visibility": "simplified"
    }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 17
    }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 29
    },
    {
        "weight": 0.2
    }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 18
    }
]
},
{
"featureType": "road.local",
"elementType": "geometry",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 16
    }
]
},
{
"featureType": "transit",
"elementType": "geometry",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 19
    }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
    {
        "color": "#000000"
    },
    {
        "lightness": 17
    }
]
}
]
        

    };
// first map
    const myMap = new google.maps.Map(document.getElementById("map"), opt);
   
    const marker = new google.maps.Marker({
        
        position: pos,
        map: myMap,
        // animation: google.maps.Animation.BOUNCE,
        title: "Gvozdika",
        // icon: './src/img/footer/mark.png'
        // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        
        
       
       });
       marker.addListener('click', function(){
        info.open(myMap, marker)
    })

// second map 
       const myMap2 = new google.maps.Map(document.getElementById("map2"), opt);
   
        const marker2 = new google.maps.Marker({
        
        position: pos,
        map: myMap2,
        // animation: google.maps.Animation.BOUNCE,
        title: "Gvozdika",
        // icon: './src/img/footer/mark.png'
        // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        
        
       
       });
       marker2.addListener('click', function(){
        info.open(myMap, marker)
    })

    const info = new google.maps.InfoWindow({
        content: '<h3>Gvozdika</h3><p>Магазин квітів</p>'
    });

    
}