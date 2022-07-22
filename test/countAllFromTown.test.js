let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe("My countAllFromTown function", () => {
    it("should count how many registrations number from a given town are available", () => {
        let results = countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341","CL");
        let expected = 3;
        assert.equal(results, expected);
    });

    it("should return 0 if there are no regitration numbers from 'CA'", () => {
        let results = countAllFromTown("CJ 124,CY 567,CL 345, CJ 456,CL 341","CA");
        let expected = 0;
        assert.equal(results, expected);
    });
});