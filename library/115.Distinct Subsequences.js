let numDistinct = function (s, t) {
    let slen = s.length,
        tlen = t.length,
        dp = Array(tlen + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(slen + 1).fill(0)
    }

    for (let i = 0; i < slen + 1; i++) {
        dp[0][i] = 1
    }

    for(let i=0;i<tlen;i++){
        for(let j=0;j<slen;j++){
            if(t.charAt(i) === s.charAt(j)){
                dp[i+1][j+1] = dp[i][j] + dp[i+1][j]
            }else{
                dp[i+1][j+1] = dp[i+1][j]
            }
        }
    }

    return dp[tlen][slen]
};
