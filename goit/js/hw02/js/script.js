

var arrNames = [];


for ( var i = 0; i < 3; i++ ) {

	var name = prompt( 'ВВЕДИТЕ ИМЯ' );

	arrNames.push ( name );

	console.log ( 'Вы ввели имя ' + name );
}
console.log ( 'Вы ввели имена ' + arrNames[0] + ', ' + arrNames[1] + ' и ' + arrNames[2] );





function choose( name, arrNames ) {


	var arrNames = [ 'ИГОРЬ', 'СВЕТЛАНА', 'ВИКТОРИЯ', 'ВЛАДИМИР', 'ВАЛЕНТИНА' ];

	
	for ( var i = 0; i < 999; i++ ) {

		var name = prompt( 'ВВЕДИТЕ ИМЯ ПОЛЬЗОВАТЕЛЯ *** большими буквами' );

		console.log ( 'Вы ввели имя ' + name )


		if ( name === arrNames[0] ) {

			alert ( name + ',' + ' вы успешно вошли!' )

			console.log ( 'Вы вошли, ' + name )

			break;


		} else if ( name === arrNames[1] ) {

			alert ( name + ',' + ' вы успешно вошли!' )

			console.log ( 'Вы вошли, ' + name )

			break;


		} else if ( name === arrNames[2] ) {

			alert ( name + ',' + ' вы успешно вошли!' )

			console.log ( 'Вы вошли, ' + name )

			break;


		} else if ( name === arrNames[3] ) {

			alert ( name + ',' + ' вы успешно вошли!' )

			console.log ( 'Вы вошли, ' + name )

			break;


		} else if ( name === arrNames[4] ) {

			alert ( name + ',' + ' вы успешно вошли!' )

			console.log ( 'Вы вошли, ' + name )

			break;


		} else {
			alert ( 'Неправильное Имя Пользователя' ) 

			console.log ( 'Не угадали!' )
		}

		alert ( 'Руки вверх, МОШЕННИК!!!!' )
	}
}

choose( name, arrNames );