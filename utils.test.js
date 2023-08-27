import {beforeAll, beforeEach, describe, expect, test} from 'vitest';
import { getAllId } from './utils';

describe('getAllId()' , () => {
    beforeEach( context =>{
            context.items = [
                {id : 1 } , 
                {id : 2 }, 
                {id : 3 } ,
                {id : 4 }
            ]
    })
    test('should send back id properties ' , ({items})=>{
        // act  
        const result = getAllId(items); 
        //assert
        expect(result).toEqual([1,2,3,4]);
    })
    
    test('should manage the wrong value ' , ({items})=> {
        items[1] = null ; 
        // act  
        const result = getAllId(items); 
        //assert
        expect(result).toEqual([1,null,3,4]);
    })
    
    test('should throw error if doen\'t receive an array' , () => {
       // arrange 
       const items = "not-array-items";
       //act 
       const methodResult  = () => getAllId(items)
    
       expect(methodResult).toThrowError('items.map is not a function');
    });
})
