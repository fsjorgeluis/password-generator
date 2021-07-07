// Type definition
type GeneratorOptios = {
    charsQty: number,
    isUppercase: boolean,
    haveNumbers: boolean,
    haveSymbols: boolean
};

/**
 * Prepare an array o numbers based on ASCII table
 * @param low minimum value
 * @param high maximum value
 * @returns array of numbers
 */
const lowToHigh = (low: number, high: number): number[] => {
    const array: number[] = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
};

const lowercaseCharactersCode = lowToHigh(97, 122);
const uppercaseCharactersCode = lowToHigh(65, 90);
const numberCharactersCode = lowToHigh(48, 57);
const symbolsCharactersCode = lowToHigh(33, 47)
    .concat(lowToHigh(58, 64))
    .concat(lowToHigh(123, 126))
    .concat(lowToHigh(91, 96));

/**
 * Get named params (object) and loop through it and apply conditionals
 * @param charsQty      string length
 * @param isUppercase   boolean param should include uppercase?
 * @param haveNumbers   boolean param should include numbers?
 * @param haveSymbols   boolean param should include special chars?
 * @returns string with password ready characteristics
 */
const generator = ({
    charsQty = 10,
    isUppercase = false,
    haveNumbers = false,
    haveSymbols = false
}: GeneratorOptios): string => {
    let charactersCode: number[] = lowercaseCharactersCode;

    if (isUppercase) charactersCode = charactersCode.concat(uppercaseCharactersCode);
    if (haveNumbers) charactersCode = charactersCode.concat(numberCharactersCode);
    if (haveSymbols) charactersCode = charactersCode.concat(symbolsCharactersCode);

    const password: string[] = [];
    for (let i = 0; i < charsQty; i++) {
        const char = Math.floor(Math.random() * charactersCode.length);
        password.push(String.fromCharCode(charactersCode[char]));
    }
    return password.join('');
};

const execute = generator({
    charsQty: 10,
    isUppercase: true,
    haveNumbers: true,
    haveSymbols: true
});

console.log(execute);