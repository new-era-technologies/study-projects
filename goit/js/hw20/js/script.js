'use strict';

$(function() {

var getData = localStorage.getItem('data');
var newData = JSON.parse(getData);

console.log('Object Massiv -->', newData);

var skills = [];
newData.forEach(function(people) {
	skills = _.concat(skills, people.skills);
	skills = _.uniq(skills);
	skills = _.sortBy(skills);
});

var name = [];
newData.forEach(function(people) {
	name = _.sortBy(newData, 'friends.length');
	name = _.map(name, 'name');
});

var friends = [];
newData.forEach(function(people) {
	friends = _.flattenDeep(_.map(newData, 'friends'));
	friends = _.uniq(_.map(friends, 'name'));
	friends = _.sortBy(friends);
});

console.log('Skills -->', skills);
console.log('Name -->', name);
console.log('Friends -->', friends);

});