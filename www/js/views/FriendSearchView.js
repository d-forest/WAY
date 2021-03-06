/**
 * Created by Dylan on 02/04/2015.
 */

var FriendSearchView = function (service) {

    var friendListView;

    this.initialize = function() {
        friendListView = new FriendListView();

        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);

        service.findAll().done(function(friends) {
           friendListView.setFriends(friends);
        });

        return this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        $('.content-list', this.$el).html(friendListView.$el);
        return this;
    };

    this.findByName = function() {
        service.findByName($('.search-key').val()).done(function(friends) {
            friendListView.setFriends(friends);
        });
    };

    this.initialize();
}