const isMatch = function (s, p) {
    const dp = Array(s.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(p.length + 1).fill(false)
    }

    dp[0][0] = true;
    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) === '*') {
            dp[0][i + 1] = dp[0][i]
        }
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (s.charAt(i) === p.charAt(j) || p.charAt(j) === '?') {
                dp[i + 1][j + 1] = dp[i][j]
            }

            if (p.charAt(j) === '*') {
                dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j]
            }
        }
    }
    return dp[s.length][p.length]
};