var numWays = function (n, relation, k) {
    var dp = Array(k + 1).fill(0).map(() => Array(n + 1).fill(0));
    dp[0][0] = 1
    for (var i = 0; i < k; i++) {
        for (var r of relation) {
            dp[i + 1][r[1]] += dp[i][r[0]]
        }
    }
    console.log(dp)
    return dp[k][n - 1]
};