describe("totalPhoneBill" ,function(){
it("should return 'total' when given 'call,sms,call,sms,sms'", function(){
assert.equal(totalPhoneBill("call,sms,call,sms,sms"), 7.45);
});
});
