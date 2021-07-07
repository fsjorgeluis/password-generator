import { jest } from "@jest/globals";
// import { lowToHigh } from '../src/generator';
import { generator } from '../src/';

beforeEach(() => {
    jest.spyOn(global.Math, 'floor').mockReturnValue(23);
});

afterEach(() => {
    jest.spyOn(global.Math, 'floor').mockRestore();
});

test("should return a string of xxxxxxxxx", () => {
    expect(generator({
        charsQty: 10,
        isUppercase: false,
        haveNumbers: false,
        haveSymbols: false
    })).toBe("xxxxxxxxxx");
});

// test("should return a array of numbers", () => {
//     expect(lowToHigh(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
// });