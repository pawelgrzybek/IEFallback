var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');


// Compile sass to compressed css andd add vendor prefixes
gulp.task('styles', function () {
  gulp.src('./ief.scss')
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .on('error', function (error) {
      console.log('- - - ERROR - - - \n' + error.message);
    })
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox >= 20'],
    }))
    .pipe(gulp.dest('.'));
});


// Concatenate files and minify to output to scripts.min.js
gulp.task('scripts', function () {
  gulp.src('./js/ief.js')
    .pipe(uglify())
    .on('error', function (error) {
      console.log('- - - ERROR - - - \n' + error.message);
    })
    .pipe(rename('ief.min.js'))
    .pipe(gulp.dest('./js'));
});


// Watch sass and js changes
gulp.task('watch', function() {
  gulp.watch('*.scss', ['styles']);
  gulp.watch('js/**/*.js', ['scripts']);
});


// default task
gulp.task('default', ['watch']);
