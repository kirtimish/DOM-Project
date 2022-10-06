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
var headtitle = document.querySelector(".title");
headtitle.style.fontWeight = "bold";
headtitle.style.color = "green";

var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[2].style.background = "green";

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = "bold";
}

// var item = document.getElementsByClassName("list-group-item");
// console.log(item); No changes as list item does not contain class name "list-group-item".

var item = document.getElementsByTagName("li");
console.log(item); //OUTPUT - [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li]
