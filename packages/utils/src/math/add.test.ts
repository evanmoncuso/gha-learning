import { test, expect } from '@jest/globals';

import add from './add';

test('it works with positive integers', () => {
    const actual = add(2,2);
    const expected = 4; 

    expect(actual).toBe(expected);
});

test('it works with only one number', () => {
    const actual = add(2);
    const expected = 2;

    expect(actual).toBe(expected);
});

test('it works with no numbers', () => {
    const actual = add();
    const expected = 0;

    expect(actual).toBe(expected);
})