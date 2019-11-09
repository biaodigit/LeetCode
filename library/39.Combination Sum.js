let combinationSum = function (candidates, target) {
    if (!candidates.length) return null;
    candidates = candidates.sort((a, b) => {
        return a - b;
    });
    let res = [];
    let findCombos = function (index, sum, arr) {
        if (sum < 0) return;
        if (sum === 0) {
            res.push(arr.slice(0));
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            arr.push(candidates[i]);
            findCombos(i, sum - candidates[i], arr);
            arr.pop();
        }
    };
    findCombos(0, target, []);
    return res
};