var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
    /*it('should work', function() {
        expect(true).to.be.true ;
    });*/
    describe('all', function(){
        it('should be an array of strings', function() {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item){
                    return typeof item === 'string';
                })
            }
        });
        it('should contain `Luke Skywalker`', function() {
            expect(starWars.all).to.include('Luke Skywalker');
        })
    })
    describe('random', function(){
        it('should return a random item from all', function() {
            var random = starWars.random();
            console.log(random);
            expect(starWars.all).to.include(random) ;
        });
        it('should return an array of random items if passed a number', function() {
            var randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(starWars.all).to.include(item) ;
            });
        });
    });
});
