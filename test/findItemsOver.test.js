let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe("My findItemsOver fuction", () => {
    it("should return all the products that have a quantity over given quantity", () => {
        const testList1 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        const quantity = 30;
        let results = findItemsOver(testList1, quantity);
        let expected = [
            {name : 'pears', qty : 37}
        ];
        assert.deepEqual(results, expected);
    });

    it("should return an empty array if none of the products have a quantity over given quantity", () => {
        const testList2 = [
            {name : 'apples', qty : 10},
            {name : 'bananas', qty : 19},
            {name : 'apples', qty : 3},
        ];
        const quantity = 100;
        let results = findItemsOver(testList2, quantity);
        let expected = [];
        assert.deepEqual(results, expected);
    });
})