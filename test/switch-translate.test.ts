import {translateUnac} from '../src/switch-translate';

test('The function return Hola',()=>{
    expect(translateUnac('hi')).toBe('hola');
});

test('The function return Luna',()=>{
    expect(translateUnac('moon')).toBe('luna');
})

test('The function return adios ',()=>{
    expect(translateUnac('bye')).toBe('adios')
})

test('The fuction not return adios ',()=>{
    expect(translateUnac('moon')).not.toBe('adios');
})
      


