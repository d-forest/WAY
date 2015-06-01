var NotificationService = function () {

    this.initialize = function() {
        var deferred = $.Deferred();
        /*
        Notification{
            id,         id de la notification
            idFriend,   id de l'ami responsable de la notification
            type,       id du type de notification (1: envoie de position, 2: demande de suivi)
            lat,        position.lat
            lon        position.lon
        }
         */
        window.localStorage.setItem("notifications", JSON.stringify(
            [
                {"id":1,"idFriend":1,"firstName": "James", "lastName": "King","type":1,"lat":"50.609248","lon":"3.136213"},
                {"id":2,"idFriend":3,"firstName": "Eugene", "lastName": "Lee","type":2,"lat":"50.606467","lon":"3.143350"}
            ]
        ));
        deferred.resolve();
        return deferred.promise();
    }

    this.findAll = function() {
        var deferred = $.Deferred();
        var results = JSON.parse(window.localStorage.getItem("notifications"));
        deferred.resolve(results);
        return deferred.promise();
    }

    this.findById = function (id) {

        var deferred = $.Deferred(),
            notifications = JSON.parse(window.localStorage.getItem("notifications")),
            notification = null,
            l = notifications.length;

        for (var i = 0; i < l; i++) {
            if (notifications[i].id === id) {
                notification = notifications[i];
                break;
            }
        }

        deferred.resolve(notification);
        return deferred.promise();
    }

    this.deleteN = function (id) {
        var notifications = JSON.parse(window.localStorage.getItem("notifications"));
        console.log('deleteN '+id);
        for (var i=0; i<notifications.length; i++) {
            if (notifications[i].id == id) {
                delete(notifications[i]);
                break;
            }
        }

        window.localStorage.setItem("notifications", JSON.stringify(notifications));
    }

}