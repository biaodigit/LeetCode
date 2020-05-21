const maxProfit = function (prices) {
    let oneBuy = Infinity, oneSell = 0;
    for (let i = 0; i < prices.length; i++) {
        oneBuy = Math.min(prices[i], oneBuy)
        oneSell = Math.max(oneSell, prices[i] - oneBuy)
    }
    return oneSell
};