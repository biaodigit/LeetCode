let combinationSum2 = function (candidates, target) {
    candidates = candidates.sort((a, b) => {
        return a - b;
    });
    let res = [];

    let findCombos = function (sum, index, arr) {
        if (sum < 0) return;
        if (sum === 0) {
            res.push(arr.slice(0));
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue;
            arr.push(candidates[i]);
            findCombos(sum - candidates[i], i + 1, arr);
            arr.pop();
        }
    };
    findCombos(target, 0, []);
    return res;
};