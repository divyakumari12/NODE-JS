const pathobj = require('path');
console.log(pathobj.dirname('C:\Users\Lenovo\Desktop\NODE JS\pathModule.js'));

console.log(pathobj.extname('C:\Users\Lenovo\Desktop\NODE JS\pathModule.js'));

console.log(pathobj.basename('C:\Users\Lenovo\Desktop\NODE JS\pathModule.js'));

console.log(pathobj.parse('C:\Users\Lenovo\Desktop\NODE JS\pathModule.js'));
console.log(pathobj.delimiter);


console.log(pathobj.join('ab', 'abc', 'c_path.js'));