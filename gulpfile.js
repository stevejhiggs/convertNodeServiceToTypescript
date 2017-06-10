const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('test', () => {
  gulp.src('tests/**/*.test.js')
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('lint', () =>
  gulp.src(['src/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

gulp.task('default', ['lint', 'test']);
