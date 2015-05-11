var FriendListView = function () {

    var friends;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.setFriends = function(list) {
        friends = list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(friends));
        return this;
    };

    this.initialize();

}