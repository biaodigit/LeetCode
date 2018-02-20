let lengthOfLIS = function (nums) {
    if (!nums.length) return 0
    if (nums.length === 1) return 1
    let memo = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                memo[i] = Math.max(memo[i], 1 + memo[j])
            }
        }
    }
    return Math.max.apply(null, memo)
};