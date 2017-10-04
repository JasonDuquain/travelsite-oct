var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');
var injectPartials = require('gulp-inject-partials');


var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
           render: {
               scss: {
                   template: './templates/sprite.scss'
               }
           } 
        }
    }
}


gulp.task('html', function() {
    console.log("k");
});


gulp.task('styles', function() {
    gulp.src('./app/assets/scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 2 version']))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./app/assets/css/'))
});


gulp.task('createSprite', ['beginClean'], function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
        
});

gulp.task('copySpriteGraphic', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCss', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/*.scss')
        .pipe(rename('_sprite.scss'))
        .pipe(gulp.dest('./app/assets/scss/partials'))
});

gulp.task('beginClean', function(){
    return del(['./app/temp/sprite', '.app/assets/images/sprites']);
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCss'], function(){
    return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCss', 'endClean']);

gulp.task("watch", ['html', 'styles'], function() {
    gulp.watch('./app/index.html', ['html']);
    gulp.watch('./app/assets/scss/**/*.scss', ['styles']);
       
});