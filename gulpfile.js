//=======================================================================
// VARIABLES
//=======================================================================

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefix = require('gulp-autoprefixer');
var convertEncoding = require('gulp-convert-encoding');
var notify = require('gulp-notify');


//=======================================================================
// WATCH
//=======================================================================

gulp.task('watch', function() {
    // browserSync.init({
    //     proxy: "namsajp.dev"
    // });

    // gulp.watch('assets/src/scripts/_dependencies/*.js', ['jquery', 'browser-sync-reload']);
    // gulp.watch(['assets/src/scripts/_vendor/*.js', 'assets/src/scripts/app/*.js', ], ['javascript', 'browser-sync-reload']);
    // gulp.watch('assets/src/scripts/analytics/*.js', ['analytics', 'browser-sync-reload']);

    gulp.watch('src/components/**/*.scss', ['scss']);
});

// DEFAULT
// gulp.task('default', ['javascript', 'jquery', 'analytics', 'scss']);



//=======================================================================
// TEMPLATE
//=======================================================================

// JAVASCRIPT
// gulp.task('javascript', function() {
//     return gulp.src([
//             'assets/src/scripts/_vendor/*.js',
//             'assets/src/scripts/app/*.js'
//         ])
//         .pipe(uglify())
//         .pipe(concat('app.js'))
//         .pipe(convertEncoding({
//             to: 'utf8'
//         }))
//         .pipe(gulp.dest('assets/dist'))
//         .pipe(notify({
//             message: '[javascript] template -> app.js'
//         }));
// });

// gulp.task('jquery', function() {
//     return gulp.src([
//             'assets/src/scripts/_dependencies/*.js',
//         ])
//         .pipe(uglify())
//         .pipe(concat('jquery.js'))
//         .pipe(convertEncoding({
//             to: 'utf8'
//         }))
//         .pipe(gulp.dest('assets/dist'))
//         .pipe(notify({
//             message: '[jquery] template -> jquery.js'
//         }));
// });


// SASS
gulp.task('scss', function() {
    gulp.src('src/components/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .on('error', function(err) {
            console.log(err.messageFormatted);
        })
        .pipe(autoprefix('last 4 versions', 'ie 9'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('src/components/'))
        .pipe(notify({
            message: '[scss] template -> styles.css'
        }));

});
