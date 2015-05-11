/**
 * Created by Dylan on 09/05/2015.
 */

var Services = function () {

    this.friendService = new FriendService();
    this.notificationService = new NotificationService();

    this.initialize = function() {
        this.friendService.initialize();
        this.notificationService.initialize();
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

}