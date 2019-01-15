'use strict';

$(() => {

	localStorage.clear();

	let test = [{
		title: ' 2 x 2 = ',
		question1: ' 4',
		question2: ' 2',
		question3: ' 5'
	},
	{
		title: ' 3 x 3 = ',
		question1: ' 3',
		question2: ' 6',
		question3: ' 9'
	},
	{
		title: ' 4 x 4 = ',
		question1: ' 1',
		question2: ' 16',
		question3: ' 4'
	},
	{
		title: ' 1 x 1 = ',
		question1: ' 0',
		question2: ' 1',
		question3: ' 1'
	}];


	localStorage.setItem('questions', JSON.stringify(test));

	let rep = [' 4',' 9',' 16',' 1', ' 1'];

	localStorage.setItem('replies', JSON.stringify(rep));

});
