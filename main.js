/*
Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
*/

const minMax = (arr) => {
	const array = [];
	array.push(Math.min(...arr));
	array.push(Math.max(...arr));
	return array;
}


//Tests
minMax([3,5,1,7,6]);
