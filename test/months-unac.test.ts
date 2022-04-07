import {monthsUnac} from '../src/months-unac';

test('Return all the months',()=>{
    expect(monthsUnac()).toEqual(
        expect.arrayContaining([expect.any(String)])
      );
});