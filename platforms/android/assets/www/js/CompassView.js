/**
 * Created by Dylan on 09/04/2015.
 */

var CompassView = function (friend) {

    var myFriend;

    this.initialize = function() {
        this.$el = $('<div/>');
        myFriend = friend;
        compass.data.destination = new LatLon(myFriend.lat,myFriend.lon);
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize();
}