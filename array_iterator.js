Array.prototype.entries()
 // What it returns

// An iterator that yields [index, value] pairs.

// Usage
 const arr1 = ['a', 'b', 'c'];

for (const [idx, val] of arr.entries()) {
  console.log(idx, val);
}
// 0 'a'
// 1 'b'
// 2 'c'

// ⭐ How entries() works internally (simple implementation)
Array.prototype.myEntries = function () {
  let index = 0;
  const arr = this;

  return {
    [Symbol.iterator]() { return this; },
    next() {
      if (index < arr.length) {
        return { value: [index, arr[index++]], done: false };
      }
      return { value: undefined, done: true };
    }
  };
};

Usage
for (const [i, v] of ['x','y','z'].myEntries()) {
  console.log(i, v);
}

// 2. Array.prototype.keys()
// What it returns

// An iterator that gives you only the indices.

Usage
const arr2 = ['a', 'b', 'c'];

for (const k of arr.keys()) {
  console.log(k);
}
// 0
// 1
// 2

// ⭐ How keys() works internally
Array.prototype.myKeys = function () {
  let index = 0;
  const arr = this;

  return {
    [Symbol.iterator]() { return this; },
    next() {
      if (index < arr.length) {
        return { value: index++, done: false };
      }
      return { value: undefined, done: true };
    }
  };
};

// ✅ 3. Array.prototype.values()
// What it returns

// An iterator that gives you only the values.

Usage
const arr = ['a', 'b', 'c'];

for (const v of arr.values()) {
  console.log(v);
}
// 'a'
// 'b'
// 'c'

// ⭐ How values() works internally
Array.prototype.myValues = function () {
  let index = 0;
  const arr = this;

  return {
    [Symbol.iterator]() { return this; },
    next() {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      }
      return { value: undefined, done: true };
    }
  };
};