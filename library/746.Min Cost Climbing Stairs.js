let minCostClimbingStairs = function (cost) {
    let dp = [cost[0], cost[1]],
        len = cost.length;
    for (let i = 2; i < len; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }
    return Math.min(dp[len - 1], dp[len - 2])
};