'use strict';

let cp = require('child_process');
let path = require('path');
let grunt = require('grunt');

let bowerBinDir = path.join(path.dirname(require.resolve('bower')), '../bin');
process.env.PATH = process.env.PATH + ':' + bowerBinDir;
cp.execSync('bower install', {stdio: 'inherit'});

// This function is asynchronous, but luckily we don't need to write callback
// because it's the last operation.
grunt.cli();
