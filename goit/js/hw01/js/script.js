



var insNum;

insNum = prompt ( 'ВВЕДИТЕ ЧИСЛО' );

console.log ( 'Вы хотите число =', insNum );

var insDeg;

insDeg = prompt ( 'ВВЕДИТЕ СТЕПЕНЬ' );

console.log ( 'Возвести в степень =', insDeg );


function pow( insNum, insDeg ) {

	if ( insDeg == 0 ) {

		return 1;

	} else if ( insDeg == 1 ) {

		return insNum;

	} else if ( insDeg < 0 ) {

		var newDeg = insDeg * (-1);

		var result =  1 / ( insNum * pow ( insNum, newDeg - 1 ) );

		return result;

	} else {

		var result = insNum * pow ( insNum, insDeg - 1 );
		
		return result;

	}

}

pow( insNum, insDeg );

alert ( 'ВЫ ПОЛУЧИЛИ ЧИСЛО = ' + pow( insNum, insDeg ) );

console.log ( 'Полученное число =', pow( insNum, insDeg ) );