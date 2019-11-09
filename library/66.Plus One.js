let plusOne = function (digits) {
    let i = digits.length - 1;
    while (digits[i] === 9 && i >= 0) {
        digits[i] = 0;
        i--
    }

    i < 0 ? digits.unshift(1) : digits[i]++

    return digits
};