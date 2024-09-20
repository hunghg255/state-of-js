const _ = require('lodash');

const str1 = ['Agiletech', 'Vietnam']
const str2 = ['Agiletech', 'Vietnam']

console.log(str1 === str2);
console.log(_.isEqual(str1, str2));

console.log(`This is state4/script.js ${str1.join(' ')}`);
