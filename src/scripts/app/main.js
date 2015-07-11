define(['app/firebaseModule', 'app/topic'], function (firebaseModule, topicModule) {

    var firebaseRef = firebaseModule.getData();

    firebaseRef.on('value', function(snapshot) {
      topicModule.render(snapshot.val().topics);
    });
});