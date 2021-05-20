const products=require('../products.json');
const { v4:uuidv4 }=require('uuid');
const { writeDataToFile }=require('../utils');

function findAll(){
    return new Promise((resolve, reject)=>{
        resolve(products);
    });
}
function findById(id){
    return new Promise((resolve, reject)=>{
        const prod=products.find((p)=>{
            return p.id===id;
        })
        resolve(prod);
    });
}

function create(product){
    return new Promise((resolve, reject)=>{
        const newProduct={...product, id:uuidv4()};
        products.push(newProduct);
        writeDataToFile('./products.json',products);
        resolve(newProduct);
    });
}



module.exports={
    findAll,
    findById,
    create
}

