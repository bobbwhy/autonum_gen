

var assert = require("assert"),
	AutonumGenAtom = require("../src/autonum_gen_atom"),
	AutonumGen = require("../src/autonum_gen");


describe("some tests of autonum generators", 
	function() { 
		'use strict';

		var autonumGen, autonumGenAtom;

		describe("autonumGenAtom tests", function() {
			var autonumGenAtom;
			it("should create an AutonumGenAtom instance that starts at 0 and increments by 1", 
				function() { 
					autonumGenAtom = new AutonumGenAtom(0, 1);
					assert.equal(autonumGenAtom._start, 0);
					assert.equal(autonumGenAtom._inc, 1);
				}
			);
			it("should create an AutonumGenAtom instance that starts at 0 and increments by 1 when there are no parameter in the instanctiation", 
				function() { 
					autonumGenAtom = new AutonumGenAtom();
					assert.equal(autonumGenAtom._start, 0);
					assert.equal(autonumGenAtom._inc, 1);
				}
			);
			it("autonumAtom instance should give 0, 1 and 2 when calling next 3 times in a row ", 
				function() { 
					assert.equal(autonumGenAtom.next(), 0);
					assert.equal(autonumGenAtom.next(), 1);
					assert.equal(autonumGenAtom.next(), 2);
				}
			);
			}
		);

		describe("autonumGen tests", function() { 
			var autonumGen;
			it("should create an AutonumGen instance that starts at 0 and increments by 1", 
				function() { 
					autonumGen = new AutonumGen(0, 1);
					assert.equal(autonumGen._start, 0);
					assert.equal(autonumGen._inc, 1);
				}
			);
			it("should create an AutonumGen instance that starts at 0 and increments by 1 when there are no parameter in the instanctiation", 
				function() { 
					autonumGen = new AutonumGen();
					assert.equal(autonumGen._start, 0);
					assert.equal(autonumGen._inc, 1);
				}
			);
			it("autonumAtom instance should give 0, 1 and 2 when calling next 3 times in a row ", 
				function() { 
					assert.equal(autonumGen.next(), 0);
					assert.equal(autonumGen.next(), 1);
					assert.equal(autonumGen.next(), 2);
				}
			);
			it("autonumAtom instance should give 2, 1 and 0 when calling prev 3 times in a row ", 
				function() { 
					assert.equal(autonumGen.prev(), 2);
					assert.equal(autonumGen.prev(), 1);
					assert.equal(autonumGen.prev(), 0);
				}
			);
			it("autonumAtom instance should give 0, 1 and 2 when calling next 3 times in a row ", 
				function() { 
					assert.equal(autonumGen.next(), 0);
					assert.equal(autonumGen.next(), 1);
					assert.equal(autonumGen.next(), 2);
				}
			);
			it("autonumAtom instance should give 0, 1 and 2 when calling next 3 times in a row after a reset", 
				function() { 
					autonumGen.reset();
					assert.equal(autonumGen.next(), 0);
					assert.equal(autonumGen.next(), 1);
					assert.equal(autonumGen.next(), 2);
				}
			);

		})

		


	}
)