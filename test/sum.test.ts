import { sum } from '../src/sum-array';

test('Sum the numbers 5,7 in the array', () => {
    expect(sum([5, 7])).toBe(12);
});
test('Sum the numbers 6,2 in the array', () => {
    expect(sum([6, 2])).toBe(8);
});

test('The function not return 15',()=>{
    expect(sum([3,2])).not.toBe(15);
})
