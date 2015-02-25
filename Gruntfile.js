
module.exports = function( grunt ) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    watch: {
      all: {
        files: ["src/**/*"],
        tasks: ["sometask"],
        options: {
          nospawn: true,
          interrupt: false,
          debounceDelay: 250,
          // livereload:1337,
          livereload: 35729,
        }
      }
    },

    connect: {
      options:{
        port:'8000',
        hostname:'127.0.0.1',
        open:true,
      },
      'serve-index':{
        options:{
          base: {
            path: 'src',
            options: {
              index: 'test2.html',
            }
          }
        }
      },
      'serve-directory':{
        options:{
          // This injects livereload into the directory listings
          livereload:true,
          base: {
            path: 'src',
          }
        }
      }
    },

  });

  grunt.registerTask('sometask', function() {
    grunt.log.write("sometask ran from watch.");
  });


  grunt.registerTask("default", [
    // "connect:serve-index",
    "connect:serve-directory",
    "watch",
  ]);

};