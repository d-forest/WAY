var FriendService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var friend = null;
        var l = friends.length;
        for (var i=0; i < l; i++) {
            if (friends[i].id === id) {
                friend = friends[i];
                break;
            }
        }
        deferred.resolve(friend);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = friends.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    var friends = [
        {"id": 1, "firstName": "James", "lastName": "King", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 2, "firstName": "Julie", "lastName": "Taylor", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 3, "firstName": "Eugene", "lastName": "Lee", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 4, "firstName": "John", "lastName": "Williams", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 5, "firstName": "Ray", "lastName": "Moore", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 6, "firstName": "Paul", "lastName": "Jones", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 7, "firstName": "Paula", "lastName": "Gates", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 8, "firstName": "Lisa", "lastName": "Wong", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 9, "firstName": "Gary", "lastName": "Donovan", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 10, "firstName": "Kathleen", "lastName": "Byrne", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 11, "firstName": "Amy", "lastName": "Jones", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"},
        {"id": 12, "firstName": "Steven", "lastName": "Wells", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org", lat: "50.606467", lon: "3.143350"}
    ];

}