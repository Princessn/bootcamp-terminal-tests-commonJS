let assert = require("assert");
let fromWhere = require("../fromWhere");

describe("My fromWhere function", () => {
    it("should return \"Bellville\" if the regitration number starts with \"CY\"", () => {
        let results = fromWhere("CY 1234");
        let expected = "Bellville";
        assert.equal(results, expected);
    });

    it("should return \"Paarl\" if the registration number start with \"CJ\"", () => {
        let results = fromWhere("CJ 246810");
        let expected = "Paarl";
        assert.equal(results, expected);
    });
});