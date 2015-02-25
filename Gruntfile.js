
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
          livereload:1337,
        }
      }
    },

    connect: {
      options:{
        open:true,
        livereload:true,
        base: './src',
        hostname:'127.0.0.1',
        port:'8000',
      },
      serve:{

      }
    }

  });

  grunt.registerTask('sometask', function() {
    grunt.log.write("sometask ran from watch.");
  });


  grunt.registerTask("default", [
    "connect",
    "watch",
  ]);

};























    // watch: {
    //   all: {
    //     files: ["src/**/*"],
    //     tasks: ["sometask"],
    //     options: {
    //       nospawn: true,
    //       interrupt: false,
    //       debounceDelay: 250,
    //       livereload:true,
    //     }
    //   }
    // },