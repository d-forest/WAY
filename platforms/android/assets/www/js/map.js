/**
 * Created by Dylan on 19/03/2015.
 */

var Omap = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.initializeMap, false);
    },

    initializeMap: function() {
        var map = new L.Map('map');

        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © OpenStreetMap contributors';
        var osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });

        var lat = 43.069452;
        var long = -89.411373;

        navigator.geolocation.getCurrentPosition(
            function(position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                map.setView(new L.LatLng(lat, long), 20);
                alert(position.coords.latitude + ',' + position.coords.longitude);
            },
            function() {
                alert('GPS location not activated');
            },
            {enableHighAccuracy: true}
        );

        map.setView(new L.LatLng(lat, long), 11);
        map.addLayer(osm);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        Omap.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

Omap.initialize();