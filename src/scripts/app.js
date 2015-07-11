requirejs.config({
    baseUrl: 'scripts',
    paths: {
        app: 'app',
        text: 'vendor/text'
    },

    shim: {
      'vendor/jquery': {
        exports: '$'
      },

      'vendor/underscore-min': {
        exports: '_'
      }
    }
});

// load app
requirejs(['app/main']);
