let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("My totalPhoneBill function", () => {
    it("should return the sum of the total phone bill", () => {
        let results = totalPhoneBill("call, sms, call, sms, sms");
        let expected = "R7.45";
        assert.equal(results, expected);
    });

    it("should return R0.00 if no call or sms made", () => {
        let results = totalPhoneBill("data, data, data");
        let expected = "R0.00";
        assert.equal(results, expected);
    });
})