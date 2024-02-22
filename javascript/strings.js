// text in javascript is represented by strings
console.log('some');

// we can concatenate strings together like below:
console.log('some'+'text');
console.log('some'+'more'+'text');

// type coercion is when values are converted 
console.log('hello'+3);

// strings also follow order of operations
console.log('£'+(5+2)); // give £7

// there are 3 ways to make strings; single quotes (''), double quotes ("") and backticks (``) called template strings
console.log('hello');
console.log("hello");
console.log(`hello`);

// template strings allow interpolation as below:
console.log(`£${2+2}`);