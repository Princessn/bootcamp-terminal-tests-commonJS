let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('My yearsAgo function', () => {
    it('should return how many years ago it was from current year', () => {
        let results = yearsAgo(2000);
        let expected = 22; 
        assert.equal(results, expected);
    });

    it('should return how many years ago it was from current year', () => {
        let results = yearsAgo(2002);
        let expected = 20; 
        assert.equal(results, expected);
    })
});