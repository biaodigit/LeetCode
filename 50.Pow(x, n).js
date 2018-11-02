let myPow = function (x, n) {
    if (n < 0) {
        n = -n;
        x = 1 / x
    }
    let res = 1;
    while (n > 0) {
        if (n % 2 === 1) res *= x;
        x *= x;
        n = Math.floor(n / 2)
    }
    return res
};