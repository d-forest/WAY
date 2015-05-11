
document.addEventListener("deviceready", onDeviceReady, false);

var map;

var selfIcon = L.icon({
    iconUrl: '../images/marker-icon-red.png',
    shadowUrl: '../images/marker-shadow.png',
    iconSize: new L.Point(25, 41),
    iconAnchor: new L.Point(13, 41),
    popupAnchor: new L.Point(1, -34),
    shadowSize: new L.Point(41, 41)
});

var destIcon = L.icon({
    iconUrl: '../images/marker-icon.png',
    shadowUrl: '../images/marker-shadow.png',
    iconSize: new L.Point(25, 41),
    iconAnchor: new L.Point(13, 41),
    popupAnchor: new L.Point(1, -34),
    shadowSize: new L.Point(41, 41)
});

var markers = null;
var viewSet = false;

function onDeviceReady() {

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    FriendSearchView.prototype.template = Handlebars.compile($("#friend-search-tpl").html());
    FriendListView.prototype.template = Handlebars.compile($("#friend-list-tpl").html());
    FriendView.prototype.template =Handlebars.compile($("#friend-tpl").html());
    CompassView.prototype.template = Handlebars.compile($("#compass-tpl").html());

    var service = new Services();
    var slider = new PageSlider($('body'));

    // il y avait un problème avec la vue compass/map, qui ne se rechargait pas lorsque l'on poussait
    // une seconde fois cette vue. on créé donc un vue définitive qui sera modifiée en fonction de l'ami
    // qu'on souhaite suivre.
    var compassView = new CompassView();

    service.initialize().done(function () {

        router.addRoute('', function() {
            console.log('empty');
            stopServices();
            slider.slidePageFrom(new HomeView().render().$el,"left");
        });

        router.addRoute('friend-search', function(id) {
            console.log('friend-search');
            stopServices();
            slider.slidePage(new FriendSearchView(service.friendService).$el);
        });

        router.addRoute('friend/:id', function(id) {
            console.log('friend-details');
            stopServices();
            service.friendService.findById(parseInt(id)).done(function(friend) {
                slider.slidePage(new FriendView(friend).render().$el);
            });
        });

        router.addRoute('sendPos/:id', function(id) {
            console.log('send position');
            //TODO: Send self position (notification to the other user)
            navigator.notification.alert('Position sent, your friend can now find you!', function(){}, 'Success', 'Ok' );
        })

        router.addRoute('request/:id', function(id) {
            console.log('request position');
            //TODO: Send position request (notification to the other user)
            navigator.notification.alert('Request sent', function(){}, 'Success', 'Ok' );
        })

        router.addRoute('compass/:id', function(id) {
            console.log('compass');
            stopServices();
            service.friendService.findById(parseInt(id)).done(function(friend) {
                startServices();
                compassView.setFriend(friend);
                slider.slidePage(compassView.render().$el);
                initializeMap();
            });
        });

        router.start();
    });

    compass.stopLocation();
    compass.stopOrientation();

    // more events to add there, for exemple backbutton to properly pause/kill the app
    //document.addEventListener("backbutton", onExitButton, false);

}

function onExitButton() {
    // save the date in localstorage for future use
}

function stopServices() {
    compass.stopLocation();
    compass.stopOrientation();
}

function startServices() {
    viewSet = false;
    markers = null;
    compass.activateLocation();
    compass.activateOrientation();
}

// do the rotation of the compass svg image
function rotate(angle) {
    $("#compass").rotate(angle);
}

// update the displayed distance (m)
function updateDistance(distance) {
    $(".distance .valeur span").text(distance);
}

function initializeMap() {
    map = new L.Map('map');
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data © OpenStreetMap contributors';
    var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});

    map.addLayer(osm);
    map.setView(compass.data.position, 17);
}

function setPositionMap(position) {
    if(!viewSet) {
        map.setView(position, 17);
        viewSet = true;
    }
    if(!markers) {
        markers = new L.layerGroup().addTo(map);
    }
    markers.clearLayers();
    var selfMarker = new L.Marker([position.lat, position.lon], {icon: selfIcon});
    var popupContent = "You are here";
    var popup = selfMarker.bindPopup( popupContent, {offset:new L.Point(0,-35)} );
    //selfMarker.addTo(markers);

    var destMarker = new L.Marker([compass.data.destination.lat,compass.data.destination.lon], {icon: destIcon});
    popupContent = "Your friend is here";
    popup = destMarker.bindPopup( popupContent, {offset:new L.Point(0,-35)} );
    //destMarker.addTo(markers);
}
