/*
Example table objects - these need to be initialised before I do anthing with them
That's why they go at the top - they should definitely go in their own file at some
I can use a template / prototype to create these table objects
*/

'use strict';

//It might make sense for me to create a constructor function to build these first - save
//on typing etc. - cleaner code? 
//I probably want about 15 tables for the prototype version

let userTable = {
    name : 'Users',
    description : 'This table contains users',
    linkedTables : ['publicationsTable', 'grantsTable'],
    columns : ['Column1', 'Column2', 'Column3', 'Column4']
  }
  
let publicationsTable = {
    name : 'Publications',
    description : 'This table contains publications',
    linkedTables : ['userTable', 'grantsTable'],
    columns : ['Column1', 'Column2', 'Column3']
  }
  
let grantsTable = {
    name : 'Grants',
    description : 'This table contains grants',
    linkedTables : ['publicationsTable'],
    columns : ['Column1', 'Column2', 'Column3', 'Column4',]
  }

let publicationRecordTable = {
  name : 'Publication Record',
  description : 'This table contains publication records',
  linkedTables : ['userTable', 'grantsTable', 'publicationsTable'],
  columns : ['Column1', 'Column2', 'Column3']
}