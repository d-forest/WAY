var FriendView = function(friend) {

    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        this.$el.html(this.template(friend));
        return this;
    };

    this.initialize();

}
