const containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (!nums || nums.length < 2) return false;

    let res = [];

    for (let i = 0; i < nums.length; i++) {
        res[i] = i;
    }

    res = res.sort((a, b) => {
        return nums[a] - nums[b]
    })

    for (let i = 0; i < nums.length; i++) {
        let x = res[i];
        for (let j = i + 1; j < nums.length; j++) {
            let y = res[j];
            let num = nums[y] - nums[x];
            let size = Math.abs(x - y);

            if (size <= k && num <= t) return true;
        }
    }

    return false
};
console.log(containsNearbyAlmostDuplicate([1, 3, 1], 2, 1))
