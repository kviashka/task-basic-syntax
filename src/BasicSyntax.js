export function romanToInteger(str) {
    let result = 0;

    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length; i++) {
        const cur = roman[str[i]];
        const next = roman[str[i + 1]];

        if (next && cur < next) {
            result -= cur;
        } else {
            result += cur;
        }
    }

    return result;
}
