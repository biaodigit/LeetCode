const maxProfit = function (prices) {
    let oneBuy = Infinity, twoBuy = Infinity,
        oneSell = 0, twoSell = 0;
    for (let p of prices) {
        oneBuy = Math.min(oneBuy, p);
        oneSell = Math.max(oneSell, p - oneBuy);
        twoBuy = Math.min(twoBuy, p - oneSell);
        twoSell = Math.max(twoSell, p - twoBuy)
    }
    return twoSell
};