
/*
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
*/
'use strict';

//This shows me that JQuery is working on this page
$("#add-table").addClass("animated bounce");

//Do initial set of local storage (arbitrary)
if (localStorage.getItem('storeTableKey') === null) {
  var storeTable = 'grantsTable';
  localStorage.setItem('storeTableKey', storeTable);
}

//Just a demo of putting a different table in the linked tables - won't be used in final
if (localStorage.getItem('storeTableKeyLinked') === null) {
  var storeTable = 'userTable';
  localStorage.setItem('storeTableKeyLinked', storeTable);
}

//eval evaluates the string (means I look up the object) - eval shouldn't be used apparently! 
let targetTable = eval(localStorage.getItem('storeTableKey'));

//In final I won't use linked table - I will use what is in the linked table array from the 
//target table - it is going to be interesting how I change this
let linkedTable = eval(localStorage.getItem('storeTableKeyLinked'));

/**************************** TARGET TABLE *********************************/
//This is what puts the info in target table DOM

$('#target').append($('<h2></h2>').text(targetTable.name));
$('#target').append($('<h3></h3>').text(targetTable.description));
$('#target').append($('<p></p>').text(targetTable.columns));

/***************************************************************************/

/***************************** LINKED TABLES *******************************/

//I should return what is the array of linked tables for the target table...

//Populating the new elements inside the dive can be done based on the content of the array

//I shouldn't be looking at linked tables because it is currently demo - I should look at targetTable
let linkedArr = targetTable.linkedTables;

for (let i = 0; i < linkedArr.length; i++) {

  $('#linked-column').append($('<div></div>').attr('id', `linked-table${i}`).addClass('linked-column-table'))

//Populating the new elements inside the dive can be done based on the content of the array
//Need to select table name from the array

  $(`#linked-table${i}`).append($('<h2></h2>').text(eval(linkedArr[i]).name));
  $(`#linked-table${i}`).append($('<h3></h3>').text(eval(linkedArr[i]).description));
  $(`#linked-table${i}`).append($('<p></p>').text(eval(linkedArr[i]).columns));

}

/***************************************************************************/

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

