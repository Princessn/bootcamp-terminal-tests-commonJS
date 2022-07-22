let assert = require("assert");
let transportFee = require("../transportFee");

describe("My transportFee function", () => {
    it("should return \"R20\" for transport fee if the shift is in morning", () => {
        let results = transportFee("morning");
        let expected = "R20";
        assert.equal(results, expected);
    });

    it("should return \"R10\" for transport fee if the shift is in the afternoon", () => {
        let results = transportFee("afternoon");
        let expected = "R10";
        assert.equal(results, expected);
    });

    it("should return \"free\" for transport fee if the shift is nightshift", () => {
        let results = transportFee("nightshift");
        let expected = "free";
        assert.equal(results, expected);
    });
});