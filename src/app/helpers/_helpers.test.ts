import * as helpers from './helpers';

test('Helpers: Filter by string', ()=>{
    expect(helpers.filterByString([{name: 'test'}, {name: 'test1'}], 'name', 'test1')).toEqual([{name: 'test1'}])
})