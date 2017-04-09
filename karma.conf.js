//jshint strict: false
module.exports = function(config) {
  config.set({

    logLevel:'WARN',
    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/angular-ui-router.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/ngMessage/ngMessage.js',
      'bower_components/ngMessage/ngMessage.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'app.js',
      'score-keeper-services/player-service.js',
      'score-keeper-tests/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
