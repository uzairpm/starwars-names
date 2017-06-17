# starwars-names

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