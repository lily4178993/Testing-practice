const reverseString = require ('../js/reverseString');

test ('"hello" returns "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
});