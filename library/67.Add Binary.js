let addBinary = function (a, b) {
    let i = a.length - 1,
        j = b.length - 1,
        carry = 0,
        result = '',
        adigit, bdigit, temp, digit;

    while (i >= 0 || j >= 0) {
        adigit = a[i] || '0';
        bdigit = b[j] || '0';
        temp = parseInt(adigit) + parseInt(bdigit) + carry;
        digit = temp % 2;
        carry = Math.floor(temp / 2);
        result = digit + result;
        i--;
        j--;
    }

    if (carry !== 0) result = carry + result;

    return result;
};