/**
 * Created by Dylan on 09/05/2015.
 */

var Services = function () {

    this.initialize = function() {
        this.friendService = new FriendService();
        this.friendService.initialize();
        this.notificationService = new NotificationService();
        this.notificationService.initialize();
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

}