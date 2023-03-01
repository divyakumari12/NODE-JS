const osobj = require("os");
//arch() - operating system architecture 32bit or 64 bit
console.log(osobj.arch());
//freemem() - to free memory
console.log(osobj.freemem());
// const mem = osobj.freemem();
// console.log(mem);
//KB - 1024
// MB - 1024
// GB - 1024
// Data in KB : mem/1024
// Data in MB : mem/1024/1024
// Data in GB : mem/1024/1024/1024
console.log(osobj.totalmem());
console.log(osobj.hostname());
console.log(osobj.release()); // gives os version(numeric values)
console.log(osobj.tmpdir());
console.log(osobj.type());
console.log(osobj.uptime());
console.log(osobj.userInfo());
console.log(osobj.version());
console.log(osobj.constants);
console.log(osobj.cpus);

//absolute path : C:\Users\Lenovo\Desktop\NODE JS\Asynchronous.js 
//relative : Asynchronous.js
