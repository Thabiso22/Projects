//
describe("test", function() {
    it("should return 'results' when given '1 for R3, 2 for R7, 3 for R10, 5 for R14 .50 ' ", function(){

        assert.equal(test('1 for R3, 2 for R7, 3 for R10, 5 for R14 .50'), 4);
    });
});
