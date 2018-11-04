const maxSubArray = function (nums) {
    let max = -Infinity,
        sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (sum < 0) {
            max = nums[i]
        } else {
            sum += nums[i]
        }
        max = Math.max(max, sum)
    }
    return max
};