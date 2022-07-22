let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('My countRegNumber function', () => {
    it('should return 3, the number of registration numbers the given string', () => {
        let results = countRegNumber('CA 182736,CY 523519,CJ 812328');
        let expected = 3;
        assert.equal(results, expected);
    });

    it('should return 1 since the string contains a single registration number', () => {
        let results = countRegNumber('CA 87452');
        let expected = 1;
        assert.equal(results, expected);
    });
});