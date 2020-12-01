const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();


gulp.task('vendor-css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
    ])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('vendor-js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js/'));
})


gulp.task("serve", (cb) => {
    browserSync.init({
        server: './'
    });

    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('**/*.js').on('change', browserSync.reload);
});


gulp.task('dev', gulp.series('vendor-css', 'vendor-js', 'serve'));