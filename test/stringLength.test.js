const stringLength = require('../js/stringLength');

test('Length of "test" to equal 4', () => {

    const string = 'test';

    expect(stringLength(string)).toBe(4);
});

test ('Length of "hello world" and "" to throw error', () => {
    const string1 = 'hello world';
    const string2 = '';

    expect(() => stringLength(string1) && stringLength(string2))
    .toThrow('String length out of range');
});