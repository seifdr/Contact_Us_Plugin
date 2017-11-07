var gulp = require( 'gulp' ),
plumber = require( 'gulp-plumber' ),
autoprefixer = require('gulp-autoprefixer'),
watch = require( 'gulp-watch' ),
jshint = require( 'gulp-jshint' ),
stylish = require( 'jshint-stylish' ),
uglify = require( 'gulp-uglify' ),
rename = require( 'gulp-rename' ),
notify = require( 'gulp-notify' ),
include = require( 'gulp-include' ),
sass = require( 'gulp-sass' ),
imageoptim = require('gulp-imageoptim'),
browserSync = require('browser-sync').create(),
critical = require('critical'),
zip = require('gulp-zip');

var config = {
    nodeDir: './node_modules'
}

// automatically reloads the page when files changed
var browserSyncWatchFiles = [
    './**/*.min.css',
    './js/**/*.min.js',
    './**/*.php'
];

// see: https://www.browsersync.io/docs/options/
var browserSyncOptions = {
    watchTask: true,
    proxy: "http://localhost/patellinis-new/"
}

// Default error handler
var onError = function( err ) {
    console.log( 'An error occured:', err.message );
    this.emit('end');
}

// Zip files up
gulp.task('zip', function () {
    return gulp.src([
      '*',
      './css/*',
      './fonts/*',
      './images/**/*',
      './inc/**/*',
      './js/**/*',
      './languages/*',
      './sass/**/*',
      './template-parts/*',
      './templates/*',
      '!bower_components',
      '!node_modules',
     ], {base: "."})
     .pipe(zip('strappress.zip'))
     .pipe(gulp.dest('.'));
   });
  
   // Jshint outputs any kind of javascript problems you might have
// Only checks javascript files inside /src directory
gulp.task( 'jshint', function() {
    return gulp.src( './js/src/*.js' )
      .pipe( jshint() )
      .pipe( jshint.reporter( stylish ) )
      .pipe( jshint.reporter( 'fail' ) );
  })

  // Concatenates all files that it finds in the manifest
// and creates two versions: normal and minified.
// It's dependent on the jshint task to succeed.
gulp.task( 'public_scripts', ['jshint'], function() {
    return gulp.src( './public-manifest.js' )
      .pipe( include() )
      .pipe( rename( { basename: 'scripts' } ) )
      .pipe( gulp.dest( './public/js/dist' ) )
      // Normal done, time to create the minified javascript (scripts.min.js)
      // remove the following 3 lines if you don't want it
      .pipe( uglify() )
      .pipe( rename( { suffix: '.min' } ) )
      .pipe( gulp.dest( './public/js/dist' ) )
      .pipe(browserSync.reload({stream: true}))
      .pipe( notify({ message: 'public scripts task complete' }));
  } );

  //same as above but for admin
  gulp.task( 'admin_scripts', ['jshint'], function() {
    return gulp.src( './admin-manifest.js' )
      .pipe( include() )
      .pipe( rename( { basename: 'scripts' } ) )
      .pipe( gulp.dest( './admin/js/dist' ) )
      // Normal done, time to create the minified javascript (scripts.min.js)
      // remove the following 3 lines if you don't want it
      .pipe( uglify() )
      .pipe( rename( { suffix: '.min' } ) )
      .pipe( gulp.dest( './admin/js/dist' ) )
      .pipe(browserSync.reload({stream: true}))
      .pipe( notify({ message: 'admin scripts task complete' }));
  } );

  // Different options for the Sass tasks
var options = {};
options.sass = {
  errLogToConsole: true,
  precision: 8,
  noCache: true,
  //imagePath: 'assets/img',
//   includePaths: [
//     config.nodeDir + '/bootstrap/scss',
//   ]
};

options.sassmin = {
  errLogToConsole: true,
  precision: 8,
  noCache: true,
  outputStyle: 'compressed',
  //imagePath: 'assets/img',
//   includePaths: [
//     config.nodeDir + '/bootstrap/scss',
//   ]
};

// Sass - public 
gulp.task('sass-public', function() {
    return gulp.src('./public/sass/wp-contact-us-public.scss')
        .pipe(plumber())
        .pipe(sass(options.sass).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ title: 'Sass', message: 'public sass task complete'  }));
});

// Sass-min - Release build minifies CSS after compiling Sass
gulp.task('sass-min-public', function() {
    return gulp.src('./public/sass/wp-contact-us-public.scss')
        .pipe(plumber())
        .pipe(sass(options.sassmin).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename( { suffix: '.min' } ) )
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ title: 'Sass', message: 'public sass-min task complete' }));
});

// Sass - public 
gulp.task('sass-admin', function() {
    return gulp.src('./admin/sass/wp-contact-us-admin.scss')
        .pipe(plumber())
        .pipe(sass(options.sass).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./admin/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ title: 'Sass', message: 'admin sass task complete'  }));
});

// Sass-min - Release build minifies CSS after compiling Sass
gulp.task('sass-min-admin', function() {
    return gulp.src('./admin/sass/wp-contact-us-admin.scss')
        .pipe(plumber())
        .pipe(sass(options.sassmin).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename( { suffix: '.min' } ) )
        .pipe(gulp.dest('./admin/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ title: 'Sass', message: 'admin sass-min task complete' }));
});

// Optimize Images - NO IMAGES - REMOVED
// gulp.task('images', function() {
//     return gulp.src('./images/**/*')
//         .pipe(imageoptim.optimize({jpegmini: true}))
//         .pipe(gulp.dest('./images'))
//         .pipe( notify({ message: 'Images task complete' }));
// });

// Generate & Inline Critical-path CSS
gulp.task('critical', function (cb) {
    critical.generate({
        base: './',
        src: 'http://sp:8888/',
        dest: 'css/home.min.css',
        ignore: ['@font-face'],
        dimensions: [{
          width: 320,
          height: 480
        },{
          width: 768,
          height: 1024
        },{
          width: 1280,
          height: 960
        }],
        minify: true
    });
});

// Starts browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync.init(browserSyncWatchFiles, browserSyncOptions);
});


// Start the livereload server and watch files for change
gulp.task( 'watch', function() {
    
     // don't listen to whole js folder, it'll create an infinite loop
     gulp.watch( [ './admin/js/**/*.js', '!./admin/js/dist/*.js', './public/js/**/*.js', '!./public/js/dist/*.js' ], [ 'admin_scripts', 'public_scripts' ] )
    
     gulp.watch( ['./admin/sass/**/**/**/*.scss'], ['sass-public', 'sass-public-min'] );

     gulp.watch( ['./public/sass/**/**/**/*.scss'], ['sass-admin', 'sass-admin-min'] );
   
     //gulp.watch( './images/**/*', ['images']);
    
     //gulp.watch( './**/*.php' ).on('change', browserSync.reload);
      
} );
    
gulp.task( 'default', ['watch', 'browser-sync'], function() {
    // Does nothing in this task, just triggers the dependent 'watch'
} );


