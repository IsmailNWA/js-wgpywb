class CustomArray extends Array {
  constructor(total, list) {
    super(...list);
  }

  static get [Symbol.species]() {
    return Array;
  }
}

const list = new CustomArray(3, [1, 2, 3]);

// This will work
const mapped = list.map((l) => {
  return l * 2;
});
console.log(mapped);

class CustomArray1 extends Array {
  constructor(total, list) {
    super(...list);
  }
}

const list1 = new CustomArray1(3, [1, 2, 3]);

// This will throw an error "Error: list is not iterable (cannot read property undefined)"
const mapped1 = list1.map((l) => {
  return l * 2;
});
console.log(mapped1);
