let multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }
    let len1 = num1.length,
        len2 = num2.length,
        ret = [],
        mul, sum, a, b;
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            mul = +num1.charAt(i) * num2.charAt(j);
            a = i + j;
            b = i + j + 1;
            sum = (!!ret[b] ? ret[b] : 0) + mul;
            ret[a] = (!!ret[a] ? ret[a] : 0) + parseInt(sum / 10);
            ret[b] = sum % 10;
        }
    }

    if (ret[0] === 0) {
        ret.shift()
    }

    return ret.join("")
};