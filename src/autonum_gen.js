
/** 
 *	@class AutonumGen
 * 		@description 
 *		Very basic autonumber class 
 *
 */

/**
 *	@function AutonumGen
 * 	@param {number} start
 *	@description defaults to 0 if start is not a number
 *	@param {inc} increment
 *	@description defaults to 1 if increment is not a number
 *	@memberof AutonumGen
 */
function AutonumGen(start, increment) { 
	this._start = this._current = 
		(typeof(start)==="number") ? start : 0;
	this._inc = (typeof(increment)==="number") ? increment : 1;
}

/** 
 *	@function next
 *	@description provides the next number
 *	@returns {number}
 *	@memberof AutonumGen
 */
AutonumGen.prototype.next = function() { 
	var rt = this._current;
	this._current+=this._inc;
	return rt;
}

/** 
 *	@function prev
 *	@description provides the previous number
 *	@returns {number}
 *	@memberof AutonumGen
 */
AutonumGen.prototype.prev = function() { 
	var rt = this._current = this._current - this._inc;
	return rt;
}

/** 
 *	@function reset
 *	@description will start the sequence again from the start value
 *	specified in the constructor
 *	@memberof AutonumGen
 */
AutonumGen.prototype.reset = function() { 
	this._current = this._start;
}

module.exports = AutonumGen;