# starwars-names

[![travis build](https://img.shields.io/travis/uzairpm/starwars-names.svg?style=flat-square)](https://travis-ci.org/uzairpm/starwars-names)
[![codecov coverage](https://img.shields.io/codecov/uzairpm/starwars-names.svg?style=flat-square)](https://codecov.io/gh/uzairpm/starwars-names)
[![version](https://img.shields.io/npm/v/starwars-names-uzair.svg?style=flat-square)](https://www.npmjs.com/package/starwars-names-uzair)
[![downloads](https://img.shields.io/npm/dm/starwars-names-uzair.svg?style=flat-square)](https://www.npmjs.com/package/starwars-names-uzair)
[![MIT License](https://img.shields.io/npm/l/starwars-names-uzair.svg?style=flat-square)](https://www.npmjs.com/package/starwars-names-uzair)

Used semantic-release
    npm install semantic-release-cli
    semantic-release setup
        this creates the .yml file, where we add the script block to run npm test.

Used commitizen, following angular commit guidelines
    npm install -D commitizen cz-conventional-changelog

Used istanbul
    npm install -D istanbul
    Modify the test script to run "istanbul cover", 
        1. exclude *.test.js files, 
        2. point to "_mocha" binary instead of "mocha" and 
        3. mention files to be covered following --