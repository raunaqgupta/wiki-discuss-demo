define(function () {
    return {
        getData: function () {
            var firebaseRef = new Firebase("https://wiki-discuss.firebaseio.com/");
            return firebaseRef;
        }
    };
});