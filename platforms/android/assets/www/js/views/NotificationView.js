/**
 * Created by Dylan on 25/05/2015.
 */

var NotificationView = function (service) {

    this.initialize = function() {
        this.$el = $('<div/>');
        return this.render();
    };

    this.render = function() {
        var self = this;
        service.findAll().done(function(notifications) {
            self.$el.html(self.template(notifications));
        });
        return this;
    };

    this.initialize();
}