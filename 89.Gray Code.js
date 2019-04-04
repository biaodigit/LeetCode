let grayCode = function (n) {
    let res = [0],
        count = 0;

    while (count < n) {
        for (let i = res.length - 1; i >= 0; i--) {
            const value = res[i] + (1 << count);
            res.push(value)
        }
        count++
    }

    return res
};
