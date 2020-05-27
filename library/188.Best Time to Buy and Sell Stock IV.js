const maxProfit = (k, prices) => {
    let len = prices.length
    if (k >= (len >> 1)) return solve(prices)
    let dp = Array(len).fill(null).map(() => Array(k + 1).fill(null).map(() => Array(2).fill(0)));
    for (let i = 0; i < len; i++) {
        for (let j = k; j >= 1; j--) {
            if (i === 0) {
                dp[i][j][0] = 0
                dp[i][j][1] = -prices[0]
                continue;
            }
            console.log(`i:${i},j:${j}`)
            console.log(`before dp[i - 1][j][0]:${dp[i - 1][j][0]},dp[i - 1][j][1]:${dp[i - 1][j][1]},prices[i]:${prices[i]}`)
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
            console.log(`after  dp[i][j][0]:${ dp[i][j][0]}`)
            console.log(`before dp[i - 1][j][1]:${dp[i - 1][j][1]},dp[i - 1][j - 1][0]:${dp[i - 1][j - 1][0]},prices[i]:${prices[i]}`)
            dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
            console.log(`after  dp[i][j][1]:${dp[i][j][1]}`)
            console.log('============================================')
        }
    }
    console.log(dp)
    return dp[len - 1][k][0]
};

const solve = (prices) => {
    if (!prices.length) return 0
    let len = prices.length,
        dp = Array(len).fill(null).map(() => Array(2).fill(null));
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[len - 1][0]
}

maxProfit(2, [3, 2, 6, 5, 0, 3])