let assert = require("assert");
let isFromBellville = require("../isFromBellville");

// Testing my isFromBellville function
describe('My isFromBellville function', () => {
    it('should return true since the plates number starts with \'CY\'', () => {
        let results = isFromBellville("CY 123");
        let expected = true;
        assert.equal(results, expected);
    });

    it('should return false since the plate number does not start with \'CY\'', () => {
        let results = isFromBellville("CJ 123");
        let expected = false;
        assert.equal(results, expected);
    });
});