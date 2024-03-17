'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

let addPrefix = names.map(individualNames => {
return `Mr ${individualNames}`;
})
console.log(addPrefix);