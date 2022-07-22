let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe("My countAllPaarl function", () => {
    it("should count how many registration number from paarl are in a given string", () => {
        let results = countAllPaarl("CJ 345 123, CK 345, CJ 123");
        let expected = 2;
        assert.equal(results, expected);
    });

    it("should count how many registration number from paarl are in a given string", () => {
        let results = countAllPaarl("CK 345 123, CK 345, CA 123");
        let expected = 0;
        assert.equal(results, expected);
    });
});