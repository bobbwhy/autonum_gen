
/** 
 *	@class AutonumGenAtom
 * 		@description 
 *		Very basic autonumber class 
 *
 */

/**
 *	@function AutonumGenAtom
 * 	@param {number} start
 *	@description defaults to 0 if start is not a number
 *	@param {inc} increment
 *	@description defaults to 1 if increment is not a number
 *	@memberof AutonumGen
 */
function AutonumGenAtom(start, increment) { 
	this._start = this._current = 
		(typeof(start)==="number") ? start : 0;
	this._inc = (typeof(increment)==="number") ? increment : 1;
}

/** 
 *	@function next
 *	@description provides the next number
 *	@returns {number}
 *	@memberof AutonumGenAtom
 */
AutonumGenAtom.prototype.next = function() { 
	var rt = this._current;
	this._current+=this._inc;
	return rt;
}

module.exports = AutonumGenAtom;




