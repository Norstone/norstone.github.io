var child = require('child_process');
var gulp = require('gulp');
var concat = require('gulp-concat');
var filelog = require('gulp-filelog');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('sass', function() {
  // Move static CSS files.
  gulp.src('./_css/landing.css')
    .pipe(gulp.dest('./css'))
    .pipe(filelog());

  // Compile SASS.
  return gulp.src('./_css/norstone.scss')
    .pipe(sass({
      includePaths: [
        './_css',
        './bower_components/foundation-sites/scss',
        './bower_components/motion-ui/src',
        './bower_components/owl.carousel/src/scss'
      ],
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(filelog());
});

gulp.task('sass:watch', function() {
  gulp.watch('./_css/**/*.scss', gulp.series('sass'));
});

gulp.task('js', function() {
  // Move static JS files.
  gulp.src('./_js/landing.js')
    .pipe(gulp.dest('js'))
    .pipe(filelog());

  // Compile JS.
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/what-input/dist/what-input.js',
    './bower_components/foundation-sites/dist/js/foundation.js',
    './bower_components/owl.carousel/dist/owl.carousel.js',
    './bower_components/owl.carousel2.thumbs/dist/owl.carousel2.thumbs.js',
    './_js/norstone.js',
    './_js/thumbnail_slider.js',
    './_js/top_bar.js',
    './_js/contact_form.js',
  ])
    .pipe(concat('norstone.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(filelog());
});

gulp.task('js:watch', function() {
  gulp.watch('./_js/**/*.js', gulp.series('js'));
});

gulp.task('html-minify', function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_site'));
});

gulp.task('jekyll', function(gulpCallback) {
  const jekyll = child.spawn('jekyll', ['build']);

  const jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        gutil.log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

  jekyll.on('exit', gulpCallback);
});

gulp.task('jekyll:serve', function() {
  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'serve']);

  const jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
        gutil.log('Jekyll: ' + message);
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task(
  'build',
  gulp.series('sass', 'js', 'jekyll', 'html-minify', function (done) {
    done();
  }),
);

gulp.task(
  'default',
  gulp.series('sass', 'js', 'jekyll:serve', 'sass:watch', 'js:watch', function (done) {
    done();
  }),
);
