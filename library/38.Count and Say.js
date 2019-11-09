let countAndSay = function (n) {
    let memo = [],
        str = '',
        len = 1, k, c;
    memo[1] = '1';
    for (let i = 2; i <= n; i++) {
        k = memo[i - 1];
        for (let j = 0; j < k.length; j++) {
            c = k.charAt(j);
            while (j + 1 < k.length && c === k.charAt(j + 1)) {
                len++;
                j++;
            }
            str += len + c;
            len = 1;
        }
        memo[i] = str;
        str = '';
    }
    return memo[n]
};