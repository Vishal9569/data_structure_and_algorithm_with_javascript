
// HashMap in JS //  
//--->A HashMap in JavaScript is most commonly implemented using either plain objects ({}) or the newer built-in Map class. Both store key–value pairs, but they behave differently.----//

const mp = new Map();

mp.set("Name:" , "Vishal Kumar");
mp.set("id:", 210) 

console.log(mp.get("id:"))
console.log(mp.has("Name:"))
console.log(mp.has("Age"))
console.log(mp.size)

for( let [key , value] of mp){
     console.log( key , value);
     
}

mp.delete("id:");
console.log(mp.size)


///-----------object in JS -------------///

const obj = {};

// Add values
obj["name"] = "Alice";
obj["age"] = 25;

// Access
console.log(obj["name"]); // "Alice"

// Check
console.log("age" in obj); // true

// Delete
delete obj["age"];


const map1 = new Map();

let arr = [1,2,3,2,3,4];

for(let val of arr){
      map1.set(val , (map1.get(val)|| 0) +1);
}

console.log(map1);
