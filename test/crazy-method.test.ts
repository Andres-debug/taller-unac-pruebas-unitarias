import {crazy} from '../src/crazy-method';

test('The function return 5',()=>{
  
    expect(crazy(1,1)).toEqual(5);
    
});

test('The function not return 4',()=>{
    expect(crazy(1,1)).not.toEqual(4);
})

test('The function return 7',()=>{
  
    expect(crazy(2,2)).toEqual(7);
    
});