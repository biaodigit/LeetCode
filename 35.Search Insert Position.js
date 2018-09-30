let searchInsert = function (nums, target) {
    let res = -1;
    if (nums.indexOf(target) > -1) {
        res = nums.indexOf(target)
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (target < nums[i]) {
                res = i;
                break;
            }
        }
        if (res === -1) {
            res = nums.length
        }
    }
    return res
};