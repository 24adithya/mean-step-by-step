var m = require('mmm');

console.log(m);
console.log(m.add(3, 5));
console.log(m.multiply(4, 5));
console.log(m.factorial(4));

console.log('Currently executing file is ' + __filename);
console.log('It is located in ' + __dirname);

console.log('Starting in ' + process.cwd());
try {
process.chdir('/');
} catch (error) {
console.error('chdir: ' + error.message);
}
console.log('Current working directory is now ' + process.cwd());