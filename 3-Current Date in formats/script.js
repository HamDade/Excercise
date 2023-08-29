const date = new Date().toLocaleString('en-GB');
console.log(date);
const dateother = new Date().toLocaleString('en-GB', {dateStyle: 'full', timeStyle: 'full'});
console.log(dateother);