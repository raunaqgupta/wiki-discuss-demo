define(function (require) {

    // firebase reference
    var firebaseModule = require('./firebaseModule');
    var firebaseRef = firebaseModule.getData();

    firebaseRef.on('value', function(snapshot) {
      console.log(snapshot.val());
    });

    //TODO - firebase error
});