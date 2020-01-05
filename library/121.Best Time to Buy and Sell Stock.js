const maxProfit = function (prices) {
    let maxCur = 0, maxVal = 0;
    for (let i = 1, len = prices.length; i < len; i++) {
        maxCur = Math.max(maxCur += prices[i] - prices[i - 1], 0)
        maxVal = Math.max(maxVal, maxCur)
    }
    return maxVal
};