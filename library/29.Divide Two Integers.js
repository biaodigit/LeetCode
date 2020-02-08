let divide = function (dividend, divisor) {
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;

    let [dvd, dvs] = [dividend, divisor].map(Math.abs),
        sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0),
        sum = 0,
        res = 0;
    while (sum + dvs <= dvd) {
        let temp = dvs,
            count = 1;
        while (sum + temp + temp <= dvd) {
            temp += temp;
            count += count;
        }
        sum += temp
        res += count
    }

    return sign ? Math.min(res, 2147483647) : Math.max(-res, -2147483648);
};