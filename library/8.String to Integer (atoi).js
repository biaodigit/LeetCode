let myAtoi = (str) => {
    let i = 0,
        res = 0,
        isNegative = false,
        code;

    while (str[i] === ' ') {
        i++
    }


    if (str[i] === '+' || str[i] === '-') {
        isNegative = str[i] === '-';
        i++
    }

    while (i < str.length) {
        code = str.charCodeAt(i) - 48;
        if (code < 0 || code > 9) break;

        res *= 10;
        res += code;
        i++
    }
    if (isNegative) {
        res = -res
    }
    return Math.max(Math.min(res, 2147483647), -2147483648)
};