/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')(['@obolnetwork/obol-ui']);

module.exports = withPlugins([withTM, withOptimizedImages], {

});