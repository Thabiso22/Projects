describe("countRegNumber" ,function(){
it("should return 'regList.length' when given 'CA 182736,CY 523519,CJ 812328'",function(){
assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
});
});
