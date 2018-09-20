let divide = function (dividend, divisor) {
    if (divisor === 0) return Infinity;
    if (dividend === 0) return 0;

    let isNegative = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0),
        absDividend = Math.abs(dividend),
        absDivisor = Math.abs(divisor),
        res = 0;

    if (divisor === 1) {
        res = absDividend
    } else {
        let sum = 0,
            multiples = 0;
        while (sum + absDivisor <= absDividend) {
            let maxMultiple = absDivisor,
                tempMultiples = 1;
            while (sum + maxMultiple + maxMultiple < absDividend) {
                maxMultiple += maxMultiple;
                tempMultiples += tempMultiples;
            }
            sum += maxMultiple
            multiples += tempMultiples
        }
        res = multiples
    }

    return isNegative ? Math.max(0 - res, -2147483648) : Math.min(res, 2147483647);
};