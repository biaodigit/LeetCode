const rob = (nums) => {
    let n = nums.length
    if (!n) return 0
    let memo = []
    for (let i = 0; i < n + 1; i++) {
        memo[i] = -1
    }
    for (let i = 0; i < n; i++) {
        for (let j = i; j >= 0; j--) {
            memo[i] = Math.max(memo[i], nums[j] + (j - 2 >= 0 ? memo[j - 2] : 0))
        }
    }
    return memo[n-1]
}
