const gulp = require('gulp');
const sass = require('gulp-sass');
const optimize = require('gulp-requirejs-optimize');
const terser = require('gulp-terser');

gulp.task('build:css', () => {
    return gulp.src('static-root/demoproject/css/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('static-root/build/demoproject/css'));
});

gulp.task('build:js', () => {
    return gulp.src([
            'static-root/demoproject/js/index.js',
            'static-root/demoproject/js/require-config.js'
        ], {base: 'static-root'})
        .pipe(optimize({
            baseUrl: 'static-root',
            mainConfigFile: 'static-root/demoproject/js/require-config.js',
            optimize: 'none'
        }))
        .pipe(terser())
        .pipe(gulp.dest('static-root/build'));
});

gulp.task('build:vendor', () => {
    return gulp.src('static-root/vendor/**/*')
        .pipe(gulp.dest('static-root/build/vendor'));
});

gulp.task('watch:css', () => {
    gulp.watch(
        'static-root/demoproject/css/*.scss',
        gulp.series('build:css')
    );
});

gulp.task('watch:js', () => {
    gulp.watch([
        'static-root/demoproject/js/**/*.{js}',
        'static-root/demoproject/mustache-templates/*.html'
    ], gulp.series('build:js'));
});

gulp.task('build', gulp.series('build:css', 'build:js', 'build:vendor'));

gulp.task('watch', gulp.parallel('watch:css', 'watch:js'));
