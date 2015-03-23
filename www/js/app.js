// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    renderHomeView();

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

    function renderHomeView() {
        $('body').html(new HomeView().render().$el);
    }

}());

/* ---------------------------------- Others functions ---------------------------------- */
function toggle_sidebar()
{
    var sidebar = document.getElementById("sidebar");
    var bar_nav = document.getElementById("bar-nav");

    console.log(sidebar.style.left);

    if(sidebar.style.left == "-200px")
    {
        sidebar.style.left = "0px";
        bar_nav.style.right = "-200px";
    }
    else
    {
        sidebar.style.left = "-200px";
        bar_nav.style.right = "0px";
    }
}