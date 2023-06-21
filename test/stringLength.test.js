const stringLength = require('../js/stringLength');

test('Length of "test" to equal 4', () => {

    const string = 'test';

    expect(stringLength(string)).toEqual(4);
})