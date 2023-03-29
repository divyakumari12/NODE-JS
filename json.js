

    const data = {
    name:"Divya",
    lastname: "Sharma",
    University: "Lovely Professional University",
    RegNO : "12013033"
};
console.log(data); //to access the object data
const result = JSON.stringify(data);
console.log(result);

const fsobj = require("fs");
fsobj.writeFile("json.text", result, (err)=>{
    console.log("Data Added");
    console.log(err);
});

const read = fsobj.readFile("json.text","utf-8",(err, data2)=>{
    if(err) throw err;
    console.log(data2);
    console.log(JSON.parse(data2));
});


            