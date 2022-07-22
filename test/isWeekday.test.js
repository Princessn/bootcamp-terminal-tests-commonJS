let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('My isWeekday function', () => {
    it('should return true if given day is a weekday', () => {
        let results = isWeekday("Monday");
        let expected = true;
        assert.equal(results, expected);
    });

    it('should retuurn false if given day is not a weekday', () => {
        let results = isWeekday("Saturday");
        let expected = false;
        assert.equal(results, expected);
    });
});