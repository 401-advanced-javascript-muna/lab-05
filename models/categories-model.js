'use strict';
const schema=require('../schemas/categories-schema');

class Categories{

    constructor(){};
    get(_id){
        if(_id){
            return schema.findOne({_id});//return one record 
        }
        else{
            return schema.find({});//return all records
        }

    }
    create(record){
        let newRecord=new schema(record);
        return newRecord.save();
        
    }
    update(_id,record){
        return schema.findByIdAndUpdate(_id,record,{new:true});
        
    }
    delete(_id){
        return schema.findByIdAndDelete(_id);

    }
}
module.exports=Categories;