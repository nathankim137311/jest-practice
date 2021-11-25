const sum = require('./sum.js');
const capitalize = require('./capitalize.js');
const calculator = require('./calculator.js');
const caesar = require('./caesar.js');
const analyze = require('./analyze');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('capitalize first letter', () => {
    expect(capitalize('word')).toBe('Word'); 
});

// calculator // 
test('calculate sum', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('calculate difference', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});

test('calculate quotient', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test('calculate product', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});

// Caesar cipher //
test('get alphabet', () => {
    expect(caesar.getAlphabet()).toEqual([
        'a', 
        'b', 
        'c', 
        'd', 
        'e', 
        'f', 
        'g', 
        'h', 
        'i', 
        'j', 
        'k', 
        'l', 
        'm', 
        'n', 
        'o', 
        'p', 
        'q', 
        'r', 
        's', 
        't', 
        'u', 
        'v', 
        'w', 
        'x', 
        'y', 
        'z'
    ]);
});

test('shifts each letter of string', () => {
    expect(caesar.caesarCipher('zebra?')).toEqual('zebra?');
});

// Analyze //
test('average number property', () => {
    expect(analyze.averageArray([1, 2, 3])).toBe(2);
});

test('array length', () => {
    expect(analyze.arrayLength([1, 2, 3])).toEqual(3);
});

test('get minimum number', () => {
    expect(analyze.arrayMin([1, 2, 3])).toEqual(1);
});

test('get maximum number', () => {
    expect(analyze.arrayMax([1, 2, 3])).toEqual(3);
});

test('get object properties', () => {
    expect(analyze.analyzeArray([1, 2, 3]))
        .toEqual(
            {
                average: 2,
                min: 1,
                max: 3,
                length: 3
            });
});

