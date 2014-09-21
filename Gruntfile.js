"use strict";

module.exports = function( grunt ) {

  // Definição dos arquivos js
  var filesJS = [
            'src/js/APP.js',
            'src/js/APP.Geolocation.js',
            'src/js/APP.Home.js',
            'src/js/APP.Request.js',
            'src/js/APP.List.js'
        ];

  // Load all tasks
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    // Watch
    watch: {
      css: {
        files: [ 'src/sass/**/*' ],
        tasks: 'compass'
        // tasks: [ 'compass:dist', 'concat:css' ]
      },

      js: {
        files: 'src/js/**/*',
        tasks: [ 'concat:js' ]
      }
    },

    // Compile scss
    compass: {
      src: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'src/css',
          environment: 'production'
        }
      },

      dist: {
        options: {
          force: true,
          config: 'config.rb'
        }
      }
    },

    // Concat css
    concat: {
      css: {
        src: 'src/css/main.css',
        dest: 'dist/css/styles.combined.min.css'
      },

      js: {
        src: filesJS,
        dest: 'dist/js/scripts.combined.min.js'
      }
    },

    // Concat and minify javascripts
    uglify: {
      options: {
        mangle: false
      },

      dist: {
        files: {
          'dist/js/scripts.combined.min.js' : filesJS
        }
      }
    },

    // Optimizes images
    imagemin: {
        dynamic: {
          files: [{
              expand: true,
              cwd: 'src/images',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'dist/images'
          }]
        }
    },

    // Clean old images
    clean: {
      build: {
        src: ['dist/images']
      }
    },

    // Browser Sync
    browserSync: {
      files: {
        src: [
          'dist/css/styles.combined.min.css',
          'dist/js/scripts.combined.min.js',
          '**/*.html',
          '**/*.php'
        ]
      },

      options: {
        host: '177.95.199.42', // Definindo um IP manualmente
        watchTask: true, // Integração com a taks watch
        ghostMode: { //Sincronizando os eventos entre os dispositivos
          clicks: true,
          scroll: true,
          links: true,
          forms: true
        }
      }
    }
  });

  // registrando tarefa default
  // grunt.registerTask( 'default', [ 'browserSync', 'watch' ] );
  grunt.registerTask( 'default', [ 'watch' ] );
  grunt.registerTask( 'img', [ 'clean', 'imagemin' ] );

  grunt.registerTask( 'src', [ 'watch', 'compass:src', 'concat:js', 'concat:css' ] );
  grunt.registerTask( 'dist', [ 'compass:dist', 'uglify:dist', 'concat:css', 'imagemin' ] );
};
