const gulp = require('gulp'),
  sass = require('gulp-sass'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpStylelint = require('gulp-stylelint'),
  autoprefixer = require('gulp-autoprefixer'),
  googleWebFonts = require('gulp-google-webfonts'),
  stripCssComments = require('gulp-strip-css-comments');

const SASS_PATH_SRC = './src/sass/';
const SASS_PATH_DIST = './dist/';

const FONTS_PATH_SRC = './src/fonts/';
const FONTS_PATH_DIST = './dist/';

gulp.task('clean', function () {
  gulp.src(SASS_PATH_DIST + '**/*', { read: false })
    .pipe(clean());
});

gulp.task('default', ['lint-css', 'sass'], function () {});

gulp.task('lint-css', function () {
  gulp
    .src(SASS_PATH_SRC + '**/*.scss')
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
  gulp.src(SASS_PATH_SRC + 'index.scss')
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
    .pipe(gulp.dest(SASS_PATH_DIST + '/css'));
});

gulp.task('sass-min', () => {
  gulp.src(SASS_PATH_SRC + '/index.scss')
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
    .pipe(stripCssComments())
    .pipe(gulp.dest(SASS_PATH_DIST + '/css'));
});

gulp.task('sass:watch', ['clean', 'sass', 'images'], function () {
  gulp.watch(SASS_PATH_SRC + '/sass/**/*.scss', ['sass']);
});

gulp.task('fonts', function () {
  gulp.src(FONTS_PATH_SRC + 'config/*.list')
    .pipe(googleWebFonts({
      fontsDir: 'fonts/',
      cssDir: 'css/',
      cssFilename: 'fonts.css'
    }))
    .pipe(gulp.dest(FONTS_PATH_DIST));
});

gulp.task('images', () => {
  gulp.src(SASS_PATH_SRC + '/img/**/*')
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest(SASS_PATH_DIST + '/img/'))
});

