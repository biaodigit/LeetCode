let firstMissingPositive = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res[nums[i] - 1] = nums[i];
        }
    }
    for (let j = 0; j < res.length; j++) {
        if (!res[j]) {
            return j + 1
        }
    }
    return res.length + 1
};