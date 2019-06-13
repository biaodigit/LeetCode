let numDecodings = function (s) {
    const len = s.length;
    let dp = new Array(len+1).fill(0);
    dp[0] = 1;
    dp[1] = s.charAt(0) !== '0' ? 1 : 0;

    for (let i = 2; i <= len; i++) {
        let first = s.substring(i-1,i);
        let second = s.substring(i - 2, i);
        if(first >= 1 && first <= 9){
            dp[i] += dp[i-1]
        }
        if(second >= 10 && second <= 26){
            dp[i] += dp[i-2]
        }
    }

    return dp[len]
};
