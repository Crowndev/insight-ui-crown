'use strict';

let cp = require('child_process');
let path = require('path');

let bowerBinDir = path.join(path.dirname(require.resolve('bower')), '../bin');
cp.execSync('bower install', {env: {PATH: process.env.PATH + ':' + bowerBinDir}});
