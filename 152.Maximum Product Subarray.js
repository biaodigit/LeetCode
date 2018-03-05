const maxProduct = function (nums) {
    if (!nums.length) return 0
    let max = nums[0], min = nums[0], result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = max
        max = Math.max(nums[i], Math.max(max * nums[i], min * nums[i]))
        min = Math.min(nums[i], Math.min(temp * nums[i], min * nums[i]))
        if (max > result) {
            result = max
        }
    }
    return result
};