let set = new Set();
set.add('phone');
set.add(25000);
set.add(25000); // duplicate, will be ignored

set.delete(25000);// removes 25000 from the set
set.clear(); // removes all elements from the set
console.log(set);