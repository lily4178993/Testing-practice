const capitalizeString = require('../js/capitalizeString');

describe ( 'properly capitalize first string', () => {
    test('Capitalize "h" in "hello"', () => {
        expect(capitalizeString('hello')).toBe('Hello');
    });
    test('Capitalize "w" in "world"', () => {
        expect(capitalizeString('world')).toBe('World');
    });
    test('Capitalize "this is a test" in "This is a test"', () => {
        expect(capitalizeString('this is a test')).toBe('This is a test');
    });
});
