let uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    scriptsPATH = {
        "input": "./dev/static/js/",
        "ouput": "./build/static/js/"
    };

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/inputmask/dist/jquery.inputmask.min.js', 'node_modules/nouislider/dist/nouislider.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/inputmask/dist/jquery.inputmask.min.js', 'node_modules/nouislider/dist/nouislider.min.js'])
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.ouput));
    });

    $.gulp.task('js:dev', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('js:build', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe(concat('main.min.js'))
            .pipe(uglify({ output: { comments: false } }))
            .pipe($.gulp.dest(scriptsPATH.ouput))
    });
};
