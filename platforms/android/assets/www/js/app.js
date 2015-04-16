// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    FriendSearchView.prototype.template = Handlebars.compile($("#friend-search-tpl").html());
    FriendListView.prototype.template = Handlebars.compile($("#friend-list-tpl").html());
    FriendView.prototype.template =Handlebars.compile($("#friend-tpl").html());
    CompassView.prototype.template = Handlebars.compile($("#compass-tpl").html());

    var service = new FriendService();
    var slider = new PageSlider($('body'));
    service.initialize().done(function () {
        // passing the service through the HomeView object
        var homeView = new HomeView(service);

        router.addRoute('', function() {
            console.log('empty');
            slider.slidePage(new HomeView(service).render().$el);
        });

        router.addRoute('friend-search', function(id) {
            console.log('friend-search');
            slider.slidePage(new FriendSearchView(service).render().$el);
        });

        router.addRoute('friend/:id', function(id) {
            console.log('friend-details');
            service.findById(parseInt(id)).done(function(friend) {
                slider.slidePage(new FriendView(friend).render().$el);
            });
        });

        router.addRoute('compass/:id', function(id) {
            console.log('compass');
            service.findById(parseInt(id)).done(function(friend) {
                slider.slidePage(new CompassView(friend).render().$el);
            });
        });

        router.start();
    });

    /* ---------------------------------- Local Functions ---------------------------------- */
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // more events to add there, for exemple backbutton to properly pause/kill the app

        var actualPosition = new LatLon(50.609763,3.136248);

        compass.stopLocation();
        compass.stopOrientation();

        compass.data.destination = new LatLon(50.606467,3.143350);

        compass.activateLocation();
        compass.activateOrientation();
    }

}());

/* ---------------------------------- Others functions ---------------------------------- */
    function rotate(angle) {
        $("#compass").rotate(angle);
    }

    function updateDistance(distance) {
        $("#compassContent .distance .valeur span").text(distance);
    }


