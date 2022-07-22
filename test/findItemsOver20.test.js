let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe("My findItemsOver20 fuction", () => {
    it("should return all the products that have a quantity over 20", () => {
        const testList1 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        let results = findItemsOver20(testList1);
        let expected = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, expected);
    });

    it("should return an empty array if none of the products have a quantity over 20", () => {
        const testList2 = [
            {name : 'apples', qty : 10},
            {name : 'bananas', qty : 19},
            {name : 'apples', qty : 3},
        ];
        let results = findItemsOver20(testList2);
        let expected = [];
        assert.deepEqual(results, expected);
    });
})