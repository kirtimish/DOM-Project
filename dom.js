// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "DOM";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[20]);
// document.all[20].textContent = "lastname";
// console.log(document.forms[0]);

// console.log(document.links);

// var header = document.getElementById("main-header");
// console.log(header);
// header.textContent = "Hello";
// header.innerText = "goodbye";

// header.style.borderBottom = 'solid 3px black';
// var headtitle = document.querySelector(".title");
// headtitle.style.fontWeight = "bold";
// headtitle.style.color = "green";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[2].style.background = "green";

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = "bold";
// }

// var item = document.getElementsByClassName("list-group-item");
// console.log(item); No changes as list item does not contain class name "list-group-item".

// var item = document.getElementsByTagName("li");
// console.log(item); OUTPUT - [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li]


// querySelector
// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");

// secondItem.style.background = "green";
// thirdItem.style.display = "none";

//querySelectorAll
// var items = document.querySelectorAll(".list-group-item");
// items[1].style.color = "green";

// var odd = document.querySelectorAll("li:nth-child(odd)");

// for(var i=0;i<odd.length;i++){
//     odd[i].style.background = "green";
// }

//traversing the DOM
var itemList = document.querySelector("#items");

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

//ChildNode

// console.log(itemList.childnodes);
// itemList.children[2].style.background = "yellow";
// console.log(itemList.children);

//firstchild
// console.log(itemList.firstChild);

//firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello";

//lastchild
// console.log(itemList.lastChild);

//lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hellowww"

// nextSibling and nextElementSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previousSibling and previousElementSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//createelement, setAttribute, createtesxtnode, appendchild

var newDiv = document.createElement('div');

newDiv.className = "hello";

newDiv.id = "hello1";

newDiv.setAttribute('title','hello div');

var newdivText = document.createTextNode('Hello-world');

newDiv.appendChild(newdivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

//console.log(newDiv);

container.insertBefore(newDiv,h1);

var item1 = document.createElement('li');
item1.className = "list-group-item";

var item1Text = document.createTextNode('Hello-world');

item1.appendChild(item1Text);

// console.log(item1);


var ul = document.querySelector("div .list-group");
var li = document.querySelector("div .list-group .list-group-item");

ul.insertBefore(item1, li);