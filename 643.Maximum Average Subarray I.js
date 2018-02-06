var findMaxAverage = function (nums, k) {
    var curr = 0
    var max = -Infinity
    for (var i = 0; i < nums.length; i++) {
        curr += nums[i]
        if (i >= k) {
            curr -= nums[i - k]
        }
        if (i >= k - 1) {
            max = Math.max(curr, max)
        }
    }
    return max / k
};