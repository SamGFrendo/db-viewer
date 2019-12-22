
/*
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
*/
'use strict';

//I should set the local storage to grantsTable if there is nothing there, otherwise move on
if (localStorage.getItem('storeTableKey') === null) {
  var storeTable = 'grantsTable';
  localStorage.setItem('storeTableKey', storeTable);
}

//Just a demo of putting a different table in the linked tables 
if (localStorage.getItem('storeTableKeyLinked') === null) {
  var storeTable = 'userTable';
  localStorage.setItem('storeTableKeyLinked', storeTable);
}

//eval evaluates the string - eval shouldn't be used apparently! 
let targetTable = eval(localStorage.getItem('storeTableKey'));

let linkedTable = eval(localStorage.getItem('storeTableKeyLinked'));

/**************************** TARGET TABLE *********************************/
//I'm sure I could shorted this, make it smarter
//This is what puts the info in target table DOM
var node = document.createElement('h2');
  node.innerHTML = targetTable.name;
  document.getElementById('target').appendChild(node);
var node = document.createElement('h3'); //Should I be using var? Try changing?
  node.innerHTML = targetTable.description;
  document.getElementById('target').appendChild(node);
var node = document.createElement('p');
  node.innerHTML = targetTable.columns;
  document.getElementById('target').appendChild(node);
/***************************************************************************/

/***************************** LINKED TABLES *******************************/

//This is what puts the info in linked table DOM - Currently it is just replicating
//What is in the target table
//Maybe I need to create divs and append it to the column div
var node = document.createElement('h2');
  node.innerHTML = linkedTable.name;
  document.getElementById('linked').appendChild(node);
var node = document.createElement('h3'); //Should I be using var? Try changing?
  node.innerHTML = linkedTable.description;
  document.getElementById('linked').appendChild(node);
var node = document.createElement('p');
  node.innerHTML = linkedTable.columns;
  document.getElementById('linked').appendChild(node);

//Creating a new div can be done based on the 
//The node I create has an id - that will change, but if I keep the class the same I can format
//it with css
var node = document.createElement('div');
  node.id = 'linked-table-1';
  node.classList.add('linked-column-table');
  document.getElementById('linked-column').appendChild(node);


var node = document.createElement('h2');
  node.innerHTML = linkedTable.name;
  document.getElementById('linked-table-1').appendChild(node);
var node = document.createElement('h3'); //Should I be using var? Try changing?
  node.innerHTML = linkedTable.description;
  document.getElementById('linked-table-1').appendChild(node);
var node = document.createElement('p');
  node.innerHTML = linkedTable.columns;
  document.getElementById('linked-table-1').appendChild(node);
/***************************************************************************/

//Next I need to make it so I use this? 
//document.replaceChild(new, old)

//The next thing I need to do is get the Linked tables to be responsive - This will be more
//complex than the target table because I need to be able to do multiple - then make them responsive

//This creates 6 divs with html in - how do I get different content in each of them
//I think we just create divs depending on the number of linked tables
//Then figure out how to pop the stuff in... 
var htmlElements = "";
for (var i = 0; i < 6; i++) {
  // I could do something clever with template literals to target specific divs 
   htmlElements += `<div class="box">html${i+1}</div>`;
   console.log(typeof(htmlElements));
}
var container = document.getElementById('linked-test');
container.innerHTML = htmlElements;

//https://www.youtube.com/watch?v=VsXCK_2DJzA
const elem = document.createElement('div');

const elemText = document.createTextNode('This is a string');

elem.appendChild(elemText);

document.body.appendChild(elem)

// var newDiv = document.createElement("div") // You now have an HTMLFragment
//   newDiv.id = "Something"
//   document.body.appendChild(newDiv)

//   var node = document.createElement('h2');
//   node.innerHTML = 'Test name';

//   document.getElementById('newDiv').appendChild(node);









//On button click - replace value in local storage and use replaceChild
function switchToUser() {
  var storeTable = 'userTable';
  localStorage.setItem('storeTableKey', storeTable);
  location.reload();
}

function switchToGrants() {
  var storeTable = 'grantsTable';
  localStorage.setItem('storeTableKey', storeTable);
  location.reload();
}

function switchToPublications() {
  var storeTable = 'publicationsTable';
  localStorage.setItem('storeTableKey', storeTable);
  location.reload();
}




//******   Currently test functionality ********/
//When called adds a new input box - Can we make it so we remove an input box?
function addInput() {
  var node = document.createElement("INPUT");
  document.getElementById("magicBox").appendChild(node);
}

