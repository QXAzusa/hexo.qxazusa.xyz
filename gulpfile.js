const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-html-minifier-terser')
const htmlclean = require('gulp-htmlclean')
const imagemin = require('gulp-imagemin')
// gulp-terser (如果使用 gulp-terser,把下面的//去掉)
const terser = require('gulp-terser');