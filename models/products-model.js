'use strict';
 const schema= require('../schemas/products-schema');

 class Products {
     constructor(){};
     get(_id){
         if(_id){
             return schema.findOne({_id});
         }else{
             return schema.find({});
         }
     }
     create(record){
         let newRecord=new schema(record);
         return newRecord.save();

     }
     update(_id,record){
         return schema.findByIdAndUpate(_id,record,{new:true});

     }
     delete(_id){
         return schema.findByIdAndDelete(_id);

     }
 }
 module.exports=Products ;