import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import del from 'del';
import browser from 'browser-sync';
import minify from 'gulp-minify';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('build/css'))
    .pipe(postcss([
      autoprefixer(),csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

//HTML
const html= () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'))
  .pipe(browser.stream());
}

// Scripts
const scripts = () => {
  return gulp.src('source/js/*.js')
.pipe(gulp.dest('build/js'))
.pipe(minify())
.pipe(rename("script.min.js"))
.pipe(gulp.dest('build/js'))
.pipe(browser.stream());
}

// Images
const optimizeImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'))
}

const copyImages = () => {
  return gulp.src('source/img/**/*.{jpg,png,svg}')
  .pipe(gulp.dest('build/img'))
}

// WeP
const createWebp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(squoosh({
    webp:{}
  }))
  .pipe(gulp.dest('build/img'))
}
// SVG

const svg = () =>
  gulp.src('source/img/*.svg')
  .pipe(svgo())
  .pipe(gulp.dest('build/img'));

const sprite = () => {
  return gulp.src('source/img/social/icon-{*}.svg')
  .pipe(svgo())
  .pipe(svgstore({
    inlineSvg:true
    }))
  .pipe(rename('strite.svg'))
  .pipe(gulp.dest('build/img'));
}

// Copy
const copy = (done) => {
  gulp.src(['source/fonts/*.{woff2,woff}', 'source/*.ico','source/img/*.webp', 'source/manifest.webmanifest'],
  {
    base:'source'
  })
  .pipe(gulp.dest('build'))
  done();
}

// Clean
const clean = () => {
  return del('build');
};

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build',
      serveStaticOptions: {
        extensions: ["html"],
    },
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/*.html', gulp.series(html));
  gulp.watch('source/*.html').on('change', browser.reload);
  gulp.watch('source/js/**/*.js', gulp.series(scripts));
}


// Build

export const build = gulp.series(
  clean,
  copy,
  copyImages,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    sprite,
    createWebp
  )
 );

//Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
));
