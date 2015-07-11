define(function (require) {

    // firebase reference
    var firebaseModule = require('./firebaseModule');
    var firebaseRef = firebaseModule.getData();

    firebaseRef.on('value', function(snapshot) {
      var topicModule = require('./topic');
      topicModule.render(snapshot.val().topics);
    });
});