let assert = require("assert");
let regCheck = require("../regCheck");

// Testing my isFromBellvile function
describe('My regCheck function', () => {
    it('should return true since the plates number ends with given parameter', () => {
        let results = regCheck("DC 123 GP", "GP");
        let expected = true;
        assert.equal(results, expected);
    });

    it('should return false since the plates number ends with given parameter', () => {
        let results = regCheck("CJ 123", "L");
        let expected = false;
        assert.equal(results, expected);
    });
});