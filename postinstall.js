'use strict';

let cp = require('child_process');
let path = require('path');

let bowerBinDir = path.join(path.dirname(require.resolve('bower')), '../bin');
process.env.PATH = process.env.PATH + ':' + bowerBinDir;
cp.execSync('bower install', {stdio: 'inherit'});
