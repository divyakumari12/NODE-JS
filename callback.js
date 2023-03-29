const abc = (name,callback) => {
    
    callback();
    console.log(`hello ${name}`);
}

const abcd = () => {
    console.log("hello1")
}

abc("divya",abcd);
