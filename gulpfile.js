const gulp =  require('gulp');
const ts =    require('gulp-typescript');
const babel = require('gulp-babel');

gulp.task('default', function ()
{
  const tsOptions = {
    target: 'es6',
    module: 'commonjs'
  };

  return gulp
    .src('./src/**/*.ts')
    .pipe(ts(tsOptions))
//  .pipe(babel(
//  {
////    presets: ['es2015']
//      plugins: ['transform-es2015-modules-commonjs']
//  }
//  ))
    .pipe(gulp.dest('./src'));
});
