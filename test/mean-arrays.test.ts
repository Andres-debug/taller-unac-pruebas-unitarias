import {mean} from '../src/mean-array';

test('The function return 2',()=>{
    expect(mean([1,2,3])).toEqual(2);
})

test('The function not return 7',()=>{
    expect(mean([1,2,3])).not.toEqual(7);
})
test('The function return 2',()=>{
    expect(mean([2,2,2])).toEqual(2);
})

test('The function return 2',()=>{
    expect(mean([5,5,5])).toEqual(5);
})