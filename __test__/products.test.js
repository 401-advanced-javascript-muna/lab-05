'use strict';

require('@code-fellows/supergoose'); //npm package ,supergoose:facked version of mongodb


const Products = require('../models/products-model');

const products = new Products();


describe('products Model', () => {
    it('can create() a new product', () => {
      let obj = { name: 'test cat 1' };
      return products.create(obj)
        .then(record => {
          Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
          })
        });
    });
  
    it('can get() a product ', () => {
      let obj = { name: 'test cat 2'};
      
      return products.create(obj)
        .then(record => {
          return products.get(record._id)
            .then(Item => {
              Object.keys(obj).forEach(key => {
                expect(Item[key]).toEqual(obj[key]);
              })
            })
        })
    })
 
    it('can update() a product', () => {
        let obj = { name: 'Test product' };
        return products.create(obj)
          .then(record => {
            // console.log('record-id', record)
            return products.update(record._id, { name: 'test2' })
            // console.log('record-id',record._id)
              .then(updated => {
                // console.log('updated', updated)
    
                expect(updated).toEqual({ name: 'test2' });
              })
              .catch(e => console.error('ERR', e));
    
          });
      });
    
    
    
      it('can delete() a product', () => {
        let obj = { name: 'Test product' };
        return products.create(obj)
          .then(record => {
            console.log('record-id', record);
            return products.delete(record._id)
            // console.log('record-id',record._id)
              .then(deleted => {
                // console.log('deleted', deleted)
    
                expect(deleted).toEqual(undefined);
              })
              .catch(e => console.error('ERR', e));
    
          });
      });
  });
