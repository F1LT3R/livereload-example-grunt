
var lrSnippet = require('connect-livereload')();

var livereloadMiddleware = function (connect, options) {
  var base = options.base[0];

  return [
    lrSnippet,
    connect.static(base),
    connect.directory(base)
  ];
};

module.exports = function( grunt ) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    watch: {
      'public': {
        files: ["public/**/*"],
        tasks: [],
        options: {
          livereload: true,
        }
      }
    },

    connect: {
      options:{
        hostname: '127.0.0.1',
        port: '8000',
        base: 'public',
        open: true,
      },
      'public':{
        options:{
          middleware: livereloadMiddleware
        }
      }
    },

  });

  grunt.registerTask("default", [
    "connect:public",
    "watch:public",
  ]);

};