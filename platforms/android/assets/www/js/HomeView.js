/**
 * Created by Dylan on 22/03/2015.
 */

var HomeView = function (service) {

    //var friendSearchView;

    this.initialize = function() {
        this.$el = $('<div/>');
        //friendSearchView = new FriendSearchView(service);
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        return this;
    };

    this.renderFriendSearch = function() {
        this.$el.html(this.template());
        //$('.content', this.$el).html(friendSearchView.$el);
        return this;
    }

    this.initialize();
}
