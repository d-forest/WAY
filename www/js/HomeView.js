/**
 * Created by Dylan on 22/03/2015.
 */

/**
 * Created by Dylan on 04/03/2015.
 */

var HomeView = function () {

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        return this;
    };

    this.initialize();
}
