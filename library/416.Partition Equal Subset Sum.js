const canPartition = (nums) => {
    if (!nums.length) return false
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum % 2 !== 0) return false

    let n = nums.length,
        C = sum / 2,
        memo = new Array(C + 1).fill(false);
    for (let i = 0; i <= C; i++) {
        memo[i] = (nums[0] === i)
    }

    for (let i = 1; i < n; i++) {
        for (let j = C; j >= nums[i]; j--) {
            memo[j] = memo[j] || memo[j - nums[i]]
        }
    }
    return memo[C]
}