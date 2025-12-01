//-----> In JavaScript, an Array is not a primitive type like number or string; it is an object. // 
//----->Arrays in JS are resizable — you can add or remove elements dynamically. // 


// -----COMMOM WAY TO CREATE ARRAY----// 
const arr = ["apple", "banana", "cherry"];
const mix = [1, "two", { a: 3 }, [4, 5]];




// -------Create using Constructor--- // 
const arr1 = new Array(1, 2, 3);        // [1,2,3]
const arr2 = new Array(5);              // creates an array with length = 5, but empty slots

// note -->  new Array(5) → NOT [5] → creates 5 empty slots, not value 5.


const a = Array.of(5); // [5]
const b = Array.of(1,2,3); // [1,2,3]



/*

1.4 Array.from()

→ Converts ANY iterable or array-like into a real array.
→ Accepts a map callback also. 

*/




Array.from('hello');            // ["h","e","l","l","o"]

Array.from(new Set([1,2,3]));   // [1,2,3]

Array.from({ length: 3 }, (v, i) => i * 2);
// [0, 2, 4]


//---->   ALL IMPORTANT ARRAY INSTANCE METHODS-----///

// Note--> MUTATING METHODS (change original array)

push()
arr.push(10);

pop()
arr.pop();

shift()
arr.shift();

unshift()
arr.unshift(10);

splice()

// Insert/remove anywhere.

arr.splice(start, deleteCount, ...items);

sort()
arr.sort((a, b) => a - b);

reverse()
arr.reverse();

fill()
arr.fill(0, 1, 3);

copyWithin()
arr.copyWithin(targetIndex, startIndex, endIndex);


// NON-MUTATING METHODS (return new arrays)


map()

callback:(value, index, array) => newValue


code:
arr.map((v, i) => v * 2);

// -----------------------------------------

filter()

callback:

(value, index, array) => boolean

arr.filter(v => v % 2 === 0);

slice()
arr.slice(start, end);

concat()
arr.concat([4,5]);

flat() / flatMap()
arr.flat(2);
arr.flatMap(v => [v, v * 2]);


// ---------------------------------------------------------------------

toSorted(), toReversed(), toSpliced(), //with()

///(NEW modern immutable methods)

arr.toSorted();
arr.toReversed();
arr.toSpliced(1, 1, "x");
arr.with(2, "changed");


//------------------------------------------------------------------------

 // SEARCHING METHODS
indexOf()
arr.indexOf(3);

includes()
arr.includes(5);

find()

// callback signature:

// (value, index, array) => boolean

arr.find(v => v > 10);

findIndex()
arr.findIndex(v => v > 10);

findLast() / findLastIndex()
arr.findLast(v => v > 10);


//--------------------------------------------------------------------------

// LOOPING METHODS
forEach()

callback:

(value, index, array) => void

arr.forEach((v,i) => console.log(v));


reduce()

callback:

(accumulator, value, index, array) => newAccumulator


code:

arr.reduce((sum, v) => sum + v, 0);

//--------------------------------------------------------------

// STRING / JOINING METHODS
join()
arr.join("-");

toString()
arr.toString();