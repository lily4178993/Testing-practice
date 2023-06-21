const calculator = require('../js/calculator');
const operation = new calculator;

describe ( 'properly added two numbers', () => {
    test('adding 1 to 1 equals 2', () => {
        expect(operation.add(1, 1)).toBe(2);
    });
    test('add two string instead of numbers', () => {
        expect(() => operation.add('a','b')).toThrow('Enter a valid number');
    });
    test('add one string and a number', () => {
        expect(() => operation.add('a', 2)).toThrow('Enter a valid number');
    });
    test('add an undefined and a null as input', () => {
        expect(() => operation.add(undefined, null)).toThrow('Enter a valid number');
    });
});

describe ( 'properly subtract two numbers', () => {
    test('subtract 1 to 1 equals 0', () => {
        expect(operation.subtract(1, 1)).toBe(0);
    });
    test('subtract two string instead of numbers', () => {
        expect(() => operation.subtract('a','b')).toThrow('Enter a valid number');
    });
    test('subtract one string and a number', () => {
        expect(() => operation.subtract('a', 2)).toThrow('Enter a valid number');
    });
    test('subtract an undefined and a null as input', () => {
        expect(() => operation.subtract(undefined, null)).toThrow('Enter a valid number');
    });
});

describe ( 'properly divide two numbers', () => {
    test('divide 20 to 2 equals 10', () => {
        expect(operation.divide(20, 2)).toBe(10);
    });
    test('divide two string instead of numbers', () => {
        expect(() => operation.divide('a','b')).toThrow('Enter a valid number');
    });
    test('divide one string and a number', () => {
        expect(() => operation.divide('a', 2)).toThrow('Enter a valid number');
    });
    test('divide an undefined and a null as input', () => {
        expect(() => operation.divide(undefined, null)).toThrow('Enter a valid number');
    });
});

describe ( 'properly multiply two numbers', () => {
    test('multiply 20 to 2 equals 40', () => {
        expect(operation.multiply(20, 2)).toBe(40);
    });
    test('multiply two string instead of numbers', () => {
        expect(() => operation.multiply('a','b')).toThrow('Enter a valid number');
    });
    test('multiply one string and a number', () => {
        expect(() => operation.multiply('a', 2)).toThrow('Enter a valid number');
    });
    test('multiply an undefined and a null as input', () => {
        expect(() => operation.multiply(undefined, null)).toThrow('Enter a valid number');
    });
});