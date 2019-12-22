
/*
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
*/
'use strict';

//I should set the local storage to grantsTable if there is nothing there, otherwise move on
if (localStorage.getItem('storeTableKey') === null) {
  var storeTable = 'grantsTable';
  localStorage.setItem('storeTableKey', storeTable);
}

//eval evaluates the string - eval shouldn't be used apparently! 
let targetTable = eval(localStorage.getItem('storeTableKey'));

/**************I'm sure I could shorten this, make it smarter *************/

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





//Next I need to make it so I use this? 
//document.replaceChild(new, old)

//The next thing I need to do is get the Linked tables to be responsive - This will be more
//complex than the target table because I need to be able to do multiple - then make them responsive



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

