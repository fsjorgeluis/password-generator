import { jest } from "@jest/globals";
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