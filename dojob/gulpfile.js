const { src, watch, series } = require('gulp');
const bs = require('browser-sync').create();

function serve(cb) { bs.init({ server: './', open: 'local' }); cb(); }   // static server
function css() { return src('**/*.css').pipe(bs.stream()); }             // inject CSS
function reload(cb) { bs.reload(); cb(); }                                // reload HTML/JS
function dev() { watch('**/*.css', css); watch(['**/*.html', '**/*.js'], reload); }

exports.default = series(serve, dev);
