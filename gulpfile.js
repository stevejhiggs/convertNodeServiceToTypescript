const gulp = require('gulp');
const mocha = require('gulp-mocha');
const ts = require('gulp-typescript');
const gulpTslint = require('gulp-tslint');
const tslint = require('tslint');

gulp.task('test', () => {
  gulp.src('tests/**/*.test.js')
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('lint', () => {
  const tsProject = ts.createProject('./tsconfig.json');
  const program = tslint.Linter.createProgram('./tsconfig.json');

  tsProject.src()
    .pipe(gulpTslint({
      formatter: 'stylish',
      program
    }))
    .pipe(gulpTslint.report({
      summarizeFailureOutput: true
    }));
});

gulp.task('default', ['lint', 'test']);
