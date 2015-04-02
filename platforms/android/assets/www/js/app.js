// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    FriendSearchView.prototype.template = Handlebars.compile($("#friend-search-tpl").html());
    FriendListView.prototype.template = Handlebars.compile($("#friend-list-tpl").html());
    FriendView.prototype.template =Handlebars.compile($("#friend-tpl").html());

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

        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();
        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    /*
    function renderHomeView() {
        $('body').html(new HomeView().render().$el);
    }*/

}());

/* ---------------------------------- Others functions ---------------------------------- */
