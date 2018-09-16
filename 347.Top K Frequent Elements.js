const topKFrequent = function (nums, k) {
    let map = new Map();
    for (let num of nums) {
        if (!map.get(num)) map.set(num, 1);
        map.set(num, map.get(num) + 1)
    }
    let res = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
    return res.slice(0, k);
};