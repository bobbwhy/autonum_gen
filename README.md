
* Autonum Module.

This module has two basic clases.  AutonumGen and AutonumGenAtom.

Both provide for generating auto numbers based on an arbitrary increment and starting with an arbitrary start value.

AutonumGen also provides for providing previous values, and resetting to the original start value.

*Examples*

*var autonumGen = new AutonumGen(0, 1);*
	creates AutonumGen instance autonumGen that starts with zero and increments by 1.

*var autonumGenAtom = new AutonumGenAtom(100, -1);*
	creates AutonumGenAtom instance autonumGenAtom that starts with 100 and increments by -1;

*var n = autonumGenAtom.next();*
	gets the next value in the sequence.

*var n = autonumGen.next();*
	gets the next value in the sequence.

*var p = autonumGenAtom.prev();*
	gets the previous value in the sequence.

*var next = autonumGenAtom.reset();*
	starts the autonum sequence to the start value set at instantiation.


