/*const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");
let itemCount = 3;

addItemBtn.addEventListener("click", function() {
    itemCount++;
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;
    itemList.appendChild(newItem);
     });
        */

/*const itemList = document.getElementById("itemList");
itemList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`);
        event.target.style.backgroundColor = "lightgreen";
    })
    onst addItemBtn = document.getElementById("addItem");
addItemBtn.addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = `New Item ${itemList.children.length + 1}`;
    ItemList.appendChild(newItem);
    
}) */


const itemList = document.getElementById("itemList");

itemList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`);
        event.target.style.backgroundColor = "lightgreen";
    }
});

const addItemBtn = document.getElementById("addItem");

addItemBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = `New Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});
