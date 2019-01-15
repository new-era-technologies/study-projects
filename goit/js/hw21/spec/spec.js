var pow = require('../js/pow.js');

describe("pow", function() {
	it("Function Counter", function() {

		var result;

		result = pow.counter(5,5);

		expect(result).toBe(3125);
	});

});

describe("pow", function() {
	it("Function Counter True", function() {

		var result;

		result = pow.counter(6,6);

		expect(result).not.toBe(36);
	});

});

describe("pow", function() {
	it("Function Counter Less Than", function() {

		var result;

		result = pow.counter(3,3);

		expect(result).toBeLessThan(28);
	});

});

describe("pow", function() {
	it("Function Counter Greater Than", function() {

		var result;

		result = pow.counter(4,4);

		expect(result).toBeGreaterThan(1);
	});

});

describe("pow", function() {
	it("Function Counter Not Null", function() {

		var result;

		result = pow.counter(7,7);

		expect(result).not.toBeNull();
	});

});