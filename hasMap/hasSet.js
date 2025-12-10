//HashSet

//Stores only unique values.

//No duplicates allowed.

//In JavaScript, it’s Set.

const set = new Set();
set.add("apple");
set.add("banana");
set.add("apple"); // duplicate ignored

console.log(set); // Set { 'apple', 'banana' }


//---> Use case: checking existence, removing duplicates, storing unique items.