let map = new Map();
map.set('name', 'phone');
map.set('price', 25000);
map.set('quantity', 1);
map.set('categories', ['electronics', 'phones']);
map.set('dimensions', {length: 7, breadth: 3.5, height: 0.5});
console.log(map);

console.log(map.size);
console.log(map.get('name'));
for (key of map.values()) {
    console.log(key);
}