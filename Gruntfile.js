
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
        open:true,

        // This inserts livereload into whatever is first served...
        livereload:true,

        //... in outr case this is the ./src directory listing.
        base: './src',
        hostname:'127.0.0.1',
        port:'8000',
      },
      serve:{
        options:{

          // middleware: [
          //   function myMiddleware(req, res, next) {
          //     res.end('Hello, world!');
          //   }
          // ]

        // middleware: function(connect, options, middlewares) {
        //   // inject a custom middleware into the array of default middlewares
        //   middlewares.unshift(function(req, res, next) {
        //     if (req.url !== '/hello/world') return next();
        //     res.end('Hello, world from port #' + options.port + '!');
        //   });
        //   return middlewares;
        // },

        // middleware: function (connect) {
        //   return [
        //     require('connect-livereload')(), // <--- here
        //     checkForDownload,
        //     mountFolder(connect, '.tmp'),
        //     mountFolder(connect, 'app')
        //   ];
        // }


        }
      }
    },

  });

  grunt.registerTask('sometask', function() {
    grunt.log.write("sometask ran from watch.");
  });


  grunt.registerTask("default", [
    "connect:serve",
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