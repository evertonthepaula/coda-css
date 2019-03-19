const gulp = require('gulp'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpStylelint = require('gulp-stylelint'),
  autoprefixer = require('gulp-autoprefixer');

const PATH_SRC = './src/';
const PATH_DIST = './dist/';

gulp.task('default', ['clean', 'lint-css', 'sass'], function () {

});

gulp.task('clean', function () {
  gulp.src(PATH_DIST + '**/*', { read: false })
    .pipe(clean());
});

gulp.task('lint-css', function () {
  gulp
    .src(PATH_SRC + '/sass/**/*.scss')
    .pipe(gulpStylelint({
      fix: true,
      reporters: [
        {
          formatter: 'verbose',
          console: true,
          save: 'stylelintrc-report.json'
        }
      ]
    }));
});

gulp.task('sass', () => {
  gulp.src(PATH_SRC + '/sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(
      sass({
        outputStyle: 'uncompressed'
      })
        .on('error', sass.logError)
    )
    .pipe(sourcemaps.write())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(PATH_DIST + '/css'));
});

gulp.task('sass-min', () => {
  gulp.src(PATH_SRC + '/sass/index.scss')
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
        .on('error', sass.logError)
    )
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(PATH_DIST + '/css'));
});

gulp.task('sass:watch', ['clean', 'sass', 'images'], function () {
  gulp.watch(PATH_SRC + '/sass/**/*.scss', ['sass']);
});

gulp.task('images', () => {
  gulp.src(PATH_SRC + '/img/**/*')
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest(PATH_DIST + '/img/'))
});
