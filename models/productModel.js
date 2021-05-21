let products=require('../products.json');
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
        const index=products.findIndex((p)=> p.id===id);
        products[index]={...product,id};        
        writeDataToFile('./products.json',products);
        resolve(products[index]);
    });
}

function update(id, product){
    return new Promise((resolve, reject)=>{
        const newProduct={...product, id:uuidv4()};
        products.push(newProduct);
        writeDataToFile('./products.json',products);
        resolve(newProduct);
    });
}

function remove(id){
    return new Promise((resolve, reject)=>{
        products=products.filter( (p)=> p.id!==id);
        writeDataToFile('./products.json',products);
        resolve();
    });
}



module.exports={
    findAll,
    findById,
    create,
    update,
    remove
}

