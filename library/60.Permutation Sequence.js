let getPermutation = function (n, k) {
    //n = 4, k = 9 => 2314
    let ret = [],
        arr = [],
        pos = k - 1,
        sum;

    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }

    sum = arr.reduce((pre, curr) => pre * curr);

    for (let i = n; i >= 1; i--) {
        sum /= i;
        ret.push(arr.splice(Math.floor(pos / sum), 1)[0]);
        pos %= sum
    }
    return ret.join('')
};