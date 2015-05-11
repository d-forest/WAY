var NotificationService = function () {

    this.initialize = function() {
        var deferred = $.Deferred();
        /*
        Notification{
            id,         id de la notification
            idFriend,   id de l'ami responsable de la notification
            type,       id du type de notification (1: envoie de position, 2: demande de suivi)
        }
         */
        window.localStorage.setItem("notifications", JSON.stringify(
            [
                {"id":1,"idFriend":1,"type":1},
                {"id":2,"idFriend":3,"type":2}
            ]
        ));
        deferred.resolve();
        return deferred.promise();
    }

}