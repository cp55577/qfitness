const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

// Copy assets task
gulp.task('copy-assets', function() {
    return gulp.src(['images/**', 'styles.css', '*.css', '*.js'], { base: '.' })
        .pipe(gulp.dest('dist/'));
});

// Build task to process includes
gulp.task('build-html', function() {
    return gulp.src(['*.html', '**/*.html', '!node_modules/**', '!includes/**'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/'));
});

// Main build task
gulp.task('build', gulp.series('build-html', 'copy-assets'));

// Watch task for development
gulp.task('watch', function() {
    gulp.watch(['*.html', '**/*.html', 'includes/**/*.html'], gulp.series('build-html'));
    gulp.watch(['images/**', 'styles.css', '*.css', '*.js'], gulp.series('copy-assets'));
});

// Default task
gulp.task('default', gulp.series('build'));
