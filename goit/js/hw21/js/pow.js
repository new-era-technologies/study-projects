var pow = {

	counter: function(insNum, insDeg) {

		if (insDeg == 0) {
			return 1;
		} else if (insDeg == 1) {
			return insNum;
		} else {
			var result = insNum;			
			for (var i=1; i<insDeg; i++) {
				result *= insNum;
			}
			return result;
		}
		
	}

}

try {
	module.exports = pow;
} catch (e) {}