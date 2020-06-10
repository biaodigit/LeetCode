let isPossible = function (nums) {
    let count = {},
        tail = {};
    for (let num of nums) {
        if (!count[num]) count[num] = 0
        count[num]++
        tail[num] = 0
    }

    for (let num of nums) {
        if (!count[num]) continue;
        if (count[num] > 0 && tail[num - 1] > 0) {
            count[num]--
            tail[num]++
            tail[num - 1]--
        } else if (count[num] && count[num + 1] && count[num + 2]) {
            count[num]--
            count[num + 1]--
            count[num + 2]--
            tail[num + 2]++
        } else { return false }
    }
    return true
};