const assert = require('assert');

const greet =require("../greet.js");
//console.log(greet);
describe("greet" ,function(){
it("should return 'helloJohn' when given 'John'", function(){
assert.equal(greet("John"), "helloJohn");
});
});
